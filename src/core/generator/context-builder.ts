import { ProjectConfig, TemplateContext } from '../../models/config';

/**
 * Constrói o contexto para renderização de templates Handlebars
 */
export function buildTemplateContext(config: ProjectConfig): TemplateContext {
    return {
        projectName: config.projectName,
        projectNamePascalCase: toPascalCase(config.projectName),
        projectNameKebabCase: toKebabCase(config.projectName),
        projectNameCamelCase: toCamelCase(config.projectName),
        projectNameSnakeCase: toSnakeCase(config.projectName),
        stack: config.stack,
        architecture: config.architecture,
        buildTool: config.buildTool,
        packageName: config.packageName,
        packagePath: config.packageName?.replace(/\./g, '/'),
        currentYear: new Date().getFullYear(),
    };
}

function toPascalCase(str: string): string {
    if (!str) return '';
    return str
        .split(/[-_\s]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

function toCamelCase(str: string): string {
    if (!str) return '';
    const pascal = toPascalCase(str);
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function toKebabCase(str: string): string {
    if (!str) return '';
    return str.toLowerCase().replace(/[\s_]+/g, '-');
}

function toSnakeCase(str: string): string {
    if (!str) return '';
    return str.toLowerCase().replace(/[\s-]+/g, '_');
}
