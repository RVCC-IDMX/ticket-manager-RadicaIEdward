import chalk from 'chalk';

const { log } = console;

class DatabaseService {
  save(email, price, timestamp) {
    log(chalk.cyanBright.bgGreen(`Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`));
  }
}

export { DatabaseService };
