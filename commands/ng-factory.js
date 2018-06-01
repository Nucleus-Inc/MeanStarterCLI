require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('ng-factory [cmd]')
        .option('-d, --dir <dir>', 'Target Directory')
        .option('-f, --filename <filename>', 'filename')
        .description('Generate AngularJS Factory')
        .action((cmd, options) => {
            rederer.renderNgFactory(options.dir, options.filename)
        })
}
