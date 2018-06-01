const log = console.log
const chalk = require('chalk')
require('shelljs/global')

module.exports = {
    initProject: (_target) => {
        if (!which('git')) {
            log(chalk.red('Sorry, this command requires git'))
            exit(1)
        }

        let dirName = _target || 'MeanStarter'
        let gitShell = 'git clone --progress https://github.com/Nucleus-Inc/MeanStarter.git'
        let yarnShell = 'cd ' + dirName + '&& yarn install'

        if (_target) {
            gitShell += ' ' + _target
        }

        log(chalk.cyan('Started git repo cloning ...'))

        if (exec(gitShell).code !== 0) {
            log(chalk.red.bold('Oops ... Something wrong happened while cloning the repo.'))
            exit(1)
        }

        log(chalk.green.bold('Finish cloning Mean Starter !'))

        if (exec(yarnShell).code !== 0) {
            log(chalk.red.bold('Oops ... Something wrong happened whily installing dependencies.'))
            exit(1)
        }
    }
}