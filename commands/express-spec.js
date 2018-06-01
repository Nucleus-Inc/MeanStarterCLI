require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express-spec [cmd]')
        .option('-d, --dir <dir>', 'Target Directory')
        .option('-f, --filename <filename>', 'filename')
        .description('Generate Express Spec')
        .action((cmd, options) => {
            rederer.renderExpressSpec(options.dir, options.filename)
        })
}