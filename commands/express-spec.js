require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express-spec')
        .description('Generate Express spec')
        .action((command) => {
            rederer.renderExpressSpec()
        })
}
