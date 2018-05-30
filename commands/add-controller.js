require('shelljs/global')
const rederer = require('../libs/renderer.js')

module.exports = function initCommand(program) {
    program
        .command('express add controller')
        // .option('-t', '--target', 'Init project under a new name and/or directory')
        .description('Generate express controller')
        .action(option => {
            rederer.renderController()
        })
}
