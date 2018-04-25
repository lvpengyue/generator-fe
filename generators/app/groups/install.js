const chalk = require('chalk');



/**
 * install group
 * @type {Object}
 */
module.exports = {
    install() {
        this.log(chalk.green.bold('\nInstalling dependencies...'));

        this.installDependencies({
            bower: false
        });
    }
};
