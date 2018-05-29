const log = console.log
const chalk = require('chalk')
require('shelljs/global')

module.exports = function initCommand(program) {
    program
        .command('init')
        .option('-t', '--target', 'Init project under a new name and/or directory')
        .description('Create a Mean Starter Project in current directory')
        .action(option => {

            if (!which('git')) {
                log(chalk.red('Sorry, this command requires git'))
                exit(1)
            }

            let shellStr = 'git clone https://github.com/Nucleus-Inc/MeanStarter.git'

            if (typeof (option) === 'string') {
                shellStr += ' ' + option
            }

            if (exec(shellStr).code !== 0) {
                log(chalk.red.bold('Oops ... Something wrong happened, please try again.'))
                exit(1)
            }
            log(chalk.green.bold('Finish cloning Mean Starter !'))
        })
}