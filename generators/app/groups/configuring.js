const chalk = require('chalk');



/**
 * configuring group
 * @type {Object}
 */
module.exports = {
    configuring() {
        this.log(chalk.green.bold('\nSaving configurations...\n'));

        // set destination context
        this.destinationRoot(`apps/${this.props.name}`);
    }
};
