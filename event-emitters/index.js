import chalk from 'chalk';

import { TicketManager } from './ticketManager.js';
import { EmailService } from './emailService.js';
import { DatabaseService } from './databaseService.js';

const { log } = console;
const { error } = console;

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on('buy', (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on('error', (error) => {
  error(chalk.bgMagentaBright.underline(`Gracefully handling our error: ${error}`));
});

log(chalk.greenBright.bgGray(`We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
log(chalk.cyan.bgGrey(`We have ${ticketManager.listenerCount('error')} listener(s) for the error event`));
