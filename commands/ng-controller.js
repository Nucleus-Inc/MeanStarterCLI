require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('ng-controller')
        .description('Generate AngularJS Controller')
        .action((command) => {
            rederer.renderNgController()
        })
}
