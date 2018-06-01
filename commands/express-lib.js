require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express-lib [cmd]')
        .option('-d, --dir <dir>', 'Target Directory')
        .option('-f, --filename <filename>', 'filename')
        .description('Generate Express Lib')
        .action((cmd, options) => {
            rederer.renderExpressLib(options.dir, options.filename)
        })
}
