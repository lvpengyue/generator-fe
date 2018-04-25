const chalk = require('chalk');



/**
 * prompting group
 * @type {Object}
 */
module.exports = {
    prompting() {
        this.log(chalk.green.bold('Configuring new application group...'));

        return this.prompt([{
            type: 'input',
            name: 'name',
            message: chalk.white.bold('name                       [1/5] '),

            // Default to current folder name
            default: this.appname
        }, {
            type: 'input',
            name: 'version',
            message: chalk.white.bold('version                    [2/5] '),
            default: '1.0.0'
        }, {
            type: 'input',
            name: 'description',
            message: chalk.white.bold('description                [3/5] '),
            default: 'Weiresearch font-end application group'
        }, {
            type: 'list',
            name: 'platform',
            message: chalk.white.bold('running platform           [4/5] '),
            choices: ['PC', 'mobile'],
            default: 'PC'
        }, {
            type: 'checkbox',
            name: 'components',
            message: chalk.white.bold('additional components      [5/5] '),
            choices: [{
                name: 'echarts',
                value: 'echarts',
                checked: false
            }, {
                name: 'moment',
                value: 'moment',
                checked: false
            }, {
                name: 'url-parse',
                value: 'url-parse',
                checked: false
            }, {
                name: 'js-cookie',
                value: 'js-cookie',
                checked: false
            }, {
                name: 'normalize.css',
                value: 'normalize.css',
                checked: false
            }]
        }]).then((answers) => {
            Object.assign(this.props, answers);
        });
    }
};
