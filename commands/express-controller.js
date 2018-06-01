require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express-controller [cmd]')
        .option('-d, --dir <dir>', 'Target Directory')
        .option('-f, --filename <filename>', 'filename')
        .description('Generate Express Controller')
        .action((cmd, options) => {
            rederer.renderExpressController(options.dir, options.filename)
        })
}
