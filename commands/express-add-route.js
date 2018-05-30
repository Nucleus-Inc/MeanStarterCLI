require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express-route')
        .description('Generate express route')
        .action((command) => {
            rederer.renderRoute()
        })
}
