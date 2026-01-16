import path from 'path';
import fs from 'fs-extra';
import * as clack from '@clack/prompts';
import { ProjectConfig } from '../../models/config';
import { TemplateEngine } from '../templates/engine';
import { buildTemplateContext } from './context-builder';

/**
 * Gera projetos a partir de templates
 */
export class ProjectGenerator {
    private engine: TemplateEngine;

    constructor() {
        this.engine = new TemplateEngine();
    }

    /**
     * Gera um projeto completo baseado na configuração
     */
    async generate(config: ProjectConfig, outputDir: string): Promise<void> {
        const spinner = clack.spinner();

        try {
            spinner.start('🏗️  Gerando projeto...');

            // 1. Verifica se diretório já existe
            const projectPath = path.join(outputDir, config.projectName);
            if (await fs.pathExists(projectPath)) {
                spinner.stop('❌ Diretório já existe');
                throw new Error(`Diretório "${config.projectName}" já existe!`);
            }

            // 2. Determina o caminho do template
            const templatePath = this.getTemplatePath(config);

            // Verifica se template existe
            if (!(await fs.pathExists(templatePath))) {
                spinner.stop('❌ Template não encontrado');
                throw new Error(
                    `Template não encontrado: ${config.stack}/${config.licenseTier}\n` +
                    `Path: ${templatePath}`
                );
            }

            // 3. Constrói o context para Handlebars
            const context = buildTemplateContext(config);

            // 4. Renderiza todos os templates
            await this.engine.renderTree(templatePath, projectPath, context);

            spinner.stop('✅ Projeto gerado com sucesso!');

            // 5. Mostra próximos passos
            this.showNextSteps(config);
        } catch (error) {
            spinner.stop('❌ Erro ao gerar projeto');
            throw error;
        }
    }

    /**
     * Retorna o caminho do template baseado na config
     */
    private getTemplatePath(config: ProjectConfig): string {
        // Caminho relativo do generator até a raiz do projeto
        // generator está em src/core/generator/
        // templates está em templates/
        const templatesRoot = path.join(__dirname, '../../../templates');

        const tier = config.licenseTier;
        const stack = config.stack;

        return path.join(templatesRoot, stack, tier);
    }

    /**
     * Mostra instruções de próximos passos
     */
    private showNextSteps(config: ProjectConfig): void {
        const instructions = this.getStackSpecificInstructions(config.stack);

        clack.note(
            `📁 Entre no diretório do projeto:\n   cd ${config.projectName}\n\n` +
            `📦 ${instructions.install}\n\n` +
            `🚀 ${instructions.run}\n\n` +
            `📝 Leia o README.md para mais informações`,
            '✨ Próximos passos'
        );
    }

    private getStackSpecificInstructions(stack: string): {
        install: string;
        run: string;
    } {
        switch (stack) {
            case 'nodejs-express':
                return {
                    install: 'Instale as dependências:\n   npm install',
                    run: 'Inicie o servidor:\n   npm run dev',
                };
            case 'nextjs':
                return {
                    install: 'Instale as dependências:\n   npm install',
                    run: 'Inicie o servidor:\n   npm run dev',
                };
            case 'java-spring':
                return {
                    install: 'Build tool configurado (Maven/Gradle)',
                    run: 'Rode a aplicação:\n   ./mvnw spring-boot:run',
                };
            case 'python-fastapi':
                return {
                    install: 'Instale as dependências:\n   pip install -r requirements.txt',
                    run: 'Inicie o servidor:\n   uvicorn main:app --reload',
                };
            case 'nestjs':
                return {
                    install: 'Instale as dependências:\n   npm install',
                    run: 'Inicie o servidor:\n   npm run start:dev',
                };
            default:
                return {
                    install: 'Veja o README.md',
                    run: 'Veja o README.md',
                };
        }
    }
}
