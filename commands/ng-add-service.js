require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('ng-service')
        .description('Generate AngularJS Service')
        .action((command) => {
            rederer.renderNgService()
        })
}
