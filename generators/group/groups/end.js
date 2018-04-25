const chalk = require('chalk');



/**
 * end group
 * @type {Object}
 */
module.exports = {
    end() {
        this.log(chalk.green.bold(`\nThe application group <${this.props.name}> is ready!\n\n`));

        this.log(chalk.yellow.bold('Usage:'));
        this.log(chalk.yellow.bold(`1. ${chalk.white('npm run clean')} - clean application's dist folder`));
        this.log(chalk.yellow.bold(`2. ${chalk.white('npm run dll:dev')} - build application's dependent libraries for development`));
        this.log(chalk.yellow.bold(`3. ${chalk.white('npm run dll:prod')} - build application's dependent libraries for production`));
        this.log(chalk.yellow.bold(`4. ${chalk.white('npm run build:dev')} - build application for development`));
        this.log(chalk.yellow.bold(`5. ${chalk.white('npm run build:prod')} - build application for production`));
        this.log(chalk.yellow.bold(`6. ${chalk.white('npm run serve:dev')} - build and preview application for development (support HMR)`));
        this.log(chalk.yellow.bold(`7. ${chalk.white('npm run serve:prod')} - build and preview application for production\n`));
    }
};
