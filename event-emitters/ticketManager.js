import { EventEmitter } from 'node:events';

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }

  buy(email, price) {
    if (this.supply > 0) {
      this.supply—;
      this.emit("buy", email, price, Date.now());
      return;
    }

    this.emit("error", new Error("There are no more tickets left to purchase"));
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
