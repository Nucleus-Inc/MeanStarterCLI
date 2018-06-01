require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('mocha-spec')
        .description('Generate mocha spec')
        .action((command) => {
            rederer.renderMochaSpec()
        })
}
