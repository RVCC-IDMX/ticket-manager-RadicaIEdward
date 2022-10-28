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

// Error handling
ticketManager.on('error', (error) => {
  error(chalk.bgMagentaBright.underline(`Gracefully handling our error: ${error}`));
});

// Listener counts
log(chalk.greenBright.bgGray(`We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
log(chalk.cyan.bgGrey(`We have ${ticketManager.listenerCount('error')} listener(s) for the error event`));

// Add new event listener
const onBuy = () => {
  log(chalk.greenBright.italic('I will be removed soon'));
};

ticketManager.on('buy', onBuy);

log(chalk.bgMagenta.underline(`We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount('buy')}`));
ticketManager.buy('test@email', 20);

// Remove a single even listener
ticketManager.off('buy', onBuy);

log(chalk.blackBright.bgYellowBright.bold(`We now have: ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
ticketManager.buy('test@email', 20);

// Remove all listeners
ticketManager.removeAllListeners('buy');
log(chalk.bgRed.bold(`We have ${ticketManager.listenerCount('buy')} listeners for the buy event`));
ticketManager.buy('test@email', 20);
log(chalk.bgRed.bold.underline('The last ticket was bought'));
