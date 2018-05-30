require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express add controller')
        .description('Generate express controller')
        .action((command) => {
            rederer.renderController()
        })
}
