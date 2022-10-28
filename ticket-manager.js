import chalk from 'chalk';

const { log } = console;

// Basic colors
log(chalk.red('Hey this is red!'));
log(chalk.magenta('Hey this is magenta!'));
log(chalk.yellow('Hey this is yellow!'));

// Background colors
log(chalk.bgRed('Red background'));

// Styling & decoration
log(chalk.bold('Bold!'));
