const ejs = require('ejs')
const fs = require('fs')
const chalk = require('chalk')
const log = console.log
const dir = require('./dir.js')

module.exports = {
    renderController: () => {
        try {
            let template = fs.readFileSync('./templates/express/controller.ejs', 'utf-8')
            let js = ejs.render(template, {
              data:{}
            })
            let targetDir = 'app/controllers/hello'
            let filename = 'index.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Express Controller Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Express controller'))
            log(chalk.yellow(e))
            exit(1)
        }
    }
}
