require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('ng-service [cmd]')
        .option('-d, --dir <dir>', 'Target Directory')
        .option('-f, --filename <filename>', 'filename')
        .description('Generate AngularJS Service')
        .action((cmd, options) => {
            rederer.renderNgService(options.dir, options.filename)
        })
}