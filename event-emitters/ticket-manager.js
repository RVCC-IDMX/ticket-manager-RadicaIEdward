import chalk from 'chalk';
import { EventEmitter } from 'node:events';

const { log } = console;

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }

  buy(email, price) {
    this.supply--;
    this.emit('buy', email, price, Date.now());
  }
}

export { TicketManager };
// Basic colors
// log(chalk.red('Hey this is red!'));
// log(chalk.magenta('Hey this is magenta!'));
// log(chalk.yellow('Hey this is yellow!'));

// Background colors
// log(chalk.bgRed('Red background'));

/// Styling & decoration
// log(chalk.bold('Bold!'));
