require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('ng-filter')
        .description('Generate AngularJS Filter')
        .action((command) => {
            rederer.renderNgFilter()
        })
}
