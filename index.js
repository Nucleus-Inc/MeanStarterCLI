const program = require('commander')
const log = console.log
const chalk = require('chalk')

program
    .version('0.1.0')
    .command('test')
    .description('test')
    .action((command) => {
        log('\n')
        log(chalk.yellow.bold('This is a test ...'))
        log('\n')
    })

program.parse(process.argv)