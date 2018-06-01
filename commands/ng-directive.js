require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('ng-directive [cmd]')
        .option('-d, --dir <dir>', 'Target Directory')
        .option('-f, --filename <filename>', 'filename')
        .description('Generate AngularJS Directive')
        .action((cmd, options) => {
            rederer.renderNgDirective(options.dir, options.filename)
        })
}
