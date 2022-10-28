import chalk from 'chalk';

const { log } = console;

class EmailService {
  send(email) {
    log(chalk.redBright.underline(`Sending email to ${email}`));
  }
}

export { EmailService };
