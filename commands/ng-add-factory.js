require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('ng-factory')
        .description('Generate AngularJS Factory')
        .action((command) => {
            rederer.renderNgFactory()
        })
}
