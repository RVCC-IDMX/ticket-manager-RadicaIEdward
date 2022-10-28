import chalk from 'chalk';
import { TicketManager } from './ticket-manager.js';

const { log } = console;

const ticketManager = new TicketManager(10);

ticketManager.on('buy', () => {
  log(chalk.yellowBright.bgCyanBright.bold('SOMEONE BOUGHT A TICKET!!!'));
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);

ticketManager.once('buy', () => {
  log(chalk.redBright.bgBlue.bold('Once upon a call!'));
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);
