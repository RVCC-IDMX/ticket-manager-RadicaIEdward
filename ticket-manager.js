import chalk from 'chalk';
import { EventEmitter } from 'node:events';

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }
}
const { log } = console;

// Basic colors
log(chalk.red('Hey this is red!'));
log(chalk.magenta('Hey this is magenta!'));
log(chalk.yellow('Hey this is yellow!'));

// Background colors
log(chalk.bgRed('Red background'));

// Styling & decoration
log(chalk.bold('Bold!'));
