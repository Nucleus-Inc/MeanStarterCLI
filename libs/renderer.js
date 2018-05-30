const ejs = require('ejs')
const fs = require('fs')
const chalk = require('chalk')
const log = console.log

module.exports = {
    renderController: () => {
        try {
            let template = fs.readFileSync('./templates/express/controller.ejs', 'utf-8')
            let html = ejs.render(template, {})
            fs.writeFileSync("controller.js", html, 'utf8')
            log(chalk.green.bold('Generated Express Controller !'))
        } catch (e) {
            log(chalk.red('Error while generating Express controller'))
            log(chalk.yellow(e))
            exit(1)
        }
    }
}
