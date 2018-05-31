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
    },
    renderNgDirective: () => {
        try {
            let template = fs.readFileSync('./templates/angularjs/directive.ejs', 'utf-8')
            let js = ejs.render(template, {
              data:{}
            })
            let targetDir = 'public/app/directives/name'
            let filename = 'name.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Angular Directive Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating AngularJS Directive'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderNgController: () => {
        try {
            let template = fs.readFileSync('./templates/angularjs/controller.ejs', 'utf-8')
            let js = ejs.render(template, {
              data:{}
            })
            let targetDir = 'public/app/controllers/name'
            let filename = 'NameCtrl.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Angular Controller Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating AngularJS Controller'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderNgFactory: () => {
        try {
            let template = fs.readFileSync('./templates/angularjs/factory.ejs', 'utf-8')
            let js = ejs.render(template, {
              data:{}
            })
            let targetDir = 'public/app/factories/name'
            let filename = 'NameFactory.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Angular Factory Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating AngularJS Factory'))
            log(chalk.yellow(e))
            exit(1)
        }
    }
}
