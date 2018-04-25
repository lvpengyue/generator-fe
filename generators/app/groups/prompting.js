const chalk = require('chalk');



/**
 * prompting group
 * @type {Object}
 */
module.exports = {
    prompting() {
        this.log(chalk.green.bold('Configuring new application...'));

        return this.prompt([{
            type: 'input',
            name: 'name',
            message: chalk.white.bold('name                       [1/3] ')
        }, {
            type: 'input',
            name: 'version',
            message: chalk.white.bold('version                    [2/3] '),
            default: '1.0.0'
        }, {
            type: 'input',
            name: 'description',
            message: chalk.white.bold('description                [3/3] '),
            default: 'Weiresearch font-end application'
        }]).then((answers) => {
            Object.assign(this.props, answers);
        });
    }
};
