import Handlebars from 'handlebars';

/**
 * Registra helpers customizados do Handlebars para templates
 */
export function registerHelpers(handlebars: typeof Handlebars): void {
    // 1. PascalCase - MyProject
    handlebars.registerHelper('pascalCase', (str: string) => {
        if (!str) return '';
        return str
            .split(/[-_\s]+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
    });

    // 2. camelCase - myProject
    handlebars.registerHelper('camelCase', (str: string) => {
        if (!str) return '';
        const pascal = str
            .split(/[-_\s]+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
        return pascal.charAt(0).toLowerCase() + pascal.slice(1);
    });

    // 3. kebab-case - my-project
    handlebars.registerHelper('kebabCase', (str: string) => {
        if (!str) return '';
        return str
            .toLowerCase()
            .replace(/[\s_]+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
    });

    // 4. snake_case - my_project
    handlebars.registerHelper('snakeCase', (str: string) => {
        if (!str) return '';
        return str
            .toLowerCase()
            .replace(/[\s-]+/g, '_')
            .replace(/[^a-z0-9_]/g, '');
    });

    // 5. UPPER_SNAKE_CASE - MY_PROJECT
    handlebars.registerHelper('upperSnakeCase', (str: string) => {
        if (!str) return '';
        return str
            .toUpperCase()
            .replace(/[\s-]+/g, '_')
            .replace(/[^A-Z0-9_]/g, '');
    });

    // 6. Package path (para Java) - com.usuario.projeto -> com/usuario/projeto
    handlebars.registerHelper('packagePath', (packageName: string) => {
        if (!packageName) return '';
        return packageName.replace(/\./g, '/');
    });

    // 7. Current year
    handlebars.registerHelper('currentYear', () => {
        return new Date().getFullYear();
    });

    // 8. Conditional helpers
    handlebars.registerHelper('eq', (a: any, b: any) => a === b);
    handlebars.registerHelper('ne', (a: any, b: any) => a !== b);
    handlebars.registerHelper('lt', (a: any, b: any) => a < b);
    handlebars.registerHelper('gt', (a: any, b: any) => a > b);
    handlebars.registerHelper('and', (a: any, b: any) => a && b);
    handlebars.registerHelper('or', (a: any, b: any) => a || b);
}
