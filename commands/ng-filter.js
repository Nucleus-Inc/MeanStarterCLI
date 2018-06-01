require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('ng-filter [cmd]')
        .option('-d, --dir <dir>', 'Target Directory')
        .option('-f, --filename <filename>', 'filename')
        .description('Generate AngularJS Filter')
        .action((cmd, options) => {
            rederer.renderNgFilter(options.dir, options.filename)
        })
}