require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express-model [cmd]')
        .option('-d, --dir <dir>', 'Target Directory')
        .option('-f, --filename <filename>', 'filename')
        .description('Generate Express Model')
        .action((cmd, options) => {
            rederer.renderExpressModel(options.dir, options.filename)
        })
}