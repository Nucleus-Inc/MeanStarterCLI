require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express-route [cmd]')
        .option('-d, --dir <dir>', 'Target Directory')
        .option('-f, --filename <filename>', 'filename')
        .description('Generate Express Route')
        .action((cmd, options) => {
            rederer.renderExpressRoute(options.dir, options.filename)
        })
}