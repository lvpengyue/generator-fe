const chalk = require('chalk');



/**
 * conflicts group
 * @type {Object}
 */
module.exports = {
    conflicts() {
        this.log(chalk.green.bold('Processing conflicts...\n'));
    }
};
