
const init = require('../libs/init.js')

module.exports = function initCommand(program) {
    program
        .command('init [cmd]')
        .option('-d, --dir <directory>', 'Target Directory')
        .description('Generate Express Lib')
        .action((cmd, options) => {
            init.initProject(options.dir)
        })
}
