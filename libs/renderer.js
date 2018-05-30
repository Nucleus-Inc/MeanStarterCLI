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
            log(chalk.red.bold('Error while generating Express Controller'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderRoute: () => {
        try {
            let template = fs.readFileSync('./templates/express/route.ejs', 'utf-8')
            let js = ejs.render(template, {
              data:{}
            })
            let targetDir = 'app/routes/hello'
            let filename = 'index.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Express Route Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Express Route'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderLib: () => {
        try {
            let template = fs.readFileSync('./templates/express/lib.ejs', 'utf-8')
            let js = ejs.render(template, {
              data:{}
            })
            let targetDir = 'app/libs/hello'
            let filename = 'index.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Express Lib Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Express Lib'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderModel: () => {
        try {
            let template = fs.readFileSync('./templates/express/model.ejs', 'utf-8')
            let js = ejs.render(template, {
              data:{}
            })
            let targetDir = 'app/models'
            let filename = 'Post.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Express Model Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Express Model'))
            log(chalk.yellow(e))
            exit(1)
        }
    }
}
