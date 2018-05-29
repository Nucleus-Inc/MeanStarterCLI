const fs = require('fs')
const path = require('path')

module.exports = function commandLoader(program) {
    const commands = {}
    const loadPath = path.dirname(__filename)

    // Loop though command files
    fs.readdirSync(loadPath).filter((filename) => {
        return (/\.js$/.test(filename) && filename !== 'index.js')
    }).forEach((filename) => {
        let name = filename.substr(0, filename.lastIndexOf('.'))

        // Require command
        let command = require(path.join(loadPath, filename))

        // Initialize command
        commands[name] = command(program)
    })

    return commands
}