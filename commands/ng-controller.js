require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('ng-controller [cmd]')
        .option('-d, --dir <dir>', 'Target Directory')
        .option('-f, --filename <filename>', 'filename')
        .description('Generate AngularJS Controller')
        .action((cmd, options) => {
            rederer.renderNgController(options.dir, options.filename)
        })
}
