require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('ng-directive')
        .description('Generate AngularJS Directive')
        .action((command) => {
            rederer.renderNgDirective()
        })
}
