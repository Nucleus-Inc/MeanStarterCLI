require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express-model')
        .description('Generate express model')
        .action((command) => {
            rederer.renderExpressModel()
        })
}
