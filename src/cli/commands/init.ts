import * as clack from '@clack/prompts';
import { runWizard } from '../prompts/wizard';
import { ProjectGenerator } from '../../core/generator/project';
import { LicenseTier } from '../../models/config';

interface InitOptions {
    name?: string;
    stack?: string;
    architecture?: string;
    buildTool?: string;
    license?: string;
    ai?: boolean;
    nonInteractive?: boolean;
}

export async function initCommand(options: InitOptions) {
    // Determinar tier de licença
    const licenseTier: LicenseTier = options.license ? 'pro' : 'free';

    if (licenseTier === 'free') {
        clack.note(
            '🆓 Modo Free ativo\n\nVocê está usando o Kibernus Free. Para acessar:\n- Arquiteturas avançadas (Clean, Hexagonal)\n- Stacks adicionais (Python FastAPI, NestJS)\n- DevOps completo (Docker, CI/CD, Terraform)\n\nAdquira uma licença Pro em: https://kibernus.dev/pro',
            'ℹ️  Informação'
        );
    } else {
        clack.note(`🌟 Modo Pro ativo\nLicense: ${options.license}`, '✨ Pro');
        // TODO: Validar license key via API
    }

    // Executar wizard interativo (ou usar options se non-interactive)
    const config = await runWizard(licenseTier);

    // Gerar projeto
    const generator = new ProjectGenerator();
    await generator.generate(config, process.cwd());

    clack.outro('🎉 Projeto criado com sucesso! Bom desenvolvimento!');
}
