#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './cli/commands/init';

const program = new Command();

program
    .name('kibernus')
    .description('Open Core CLI for scaffolding production-ready backend and fullstack projects')
    .version('0.1.0');

program
    .command('init')
    .description('Initialize a new project')
    .option('-n, --name <name>', 'Project name')
    .option('-s, --stack <stack>', 'Technology stack (nextjs, java-spring, nodejs-express, python-fastapi, nestjs)')
    .option('-a, --architecture <arch>', 'Architecture (mvc, clean, hexagonal)')
    .option('-b, --build-tool <tool>', 'Build tool (maven, gradle, npm, pnpm, yarn)')
    .option('-l, --license <key>', 'Pro license key')
    .option('--no-ai', 'Skip AI documentation generation')
    .option('--non-interactive', 'Run in non-interactive mode (requires all options)')
    .action(initCommand);

program.parse();
