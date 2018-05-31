require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express-lib')
        .description('Generate express lib')
        .action((command) => {
            rederer.renderLib()
        })
}
