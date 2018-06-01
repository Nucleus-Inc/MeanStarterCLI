const ejs = require('ejs')
const fs = require('fs')
const chalk = require('chalk')
const log = console.log
const dir = require('./dir.js')

module.exports = {
    renderExpressController: (_target, _filename) => {
        try {
            let template = fs.readFileSync('./templates/express/controller.ejs', 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'app/controllers/hello'
            let filename = _filename || 'index'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename + '.js', js, 'utf8')

            log(chalk.green.bold('Express Controller Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Express Controller'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderExpressRoute: () => {
        try {
            let template = fs.readFileSync('./templates/express/route.ejs', 'utf-8')
            let js = ejs.render(template, {
                data: {}
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
    renderExpressLib: (_target, _filename) => {
        try {
            let template = fs.readFileSync('./templates/express/lib.ejs', 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'app/libs/hello'
            let filename = _filename || 'index.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Express Lib Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Express Lib'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderExpressModel: () => {
        try {
            let template = fs.readFileSync('./templates/express/model.ejs', 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = 'app/models'
            let filename = 'User.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Express Model Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Express Model'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderExpressSpec: () => {
        try {
            let template = fs.readFileSync('./templates/express/spec.ejs', 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = 'specs/resources/hello'
            let filename = 'index.spec.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Mocha Spec Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Mocha Spec'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderNgDirective: () => {
        try {
            let template = fs.readFileSync('./templates/angularjs/directive.ejs', 'utf-8')
            let js = ejs.render(template, {
                data: {}
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
                data: {}
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
                data: {}
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
    },
    renderNgFilter: () => {
        try {
            let template = fs.readFileSync('./templates/angularjs/filter.ejs', 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = 'public/app/filters/name'
            let filename = 'Name.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Angular Filter Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating AngularJS Filter'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderNgService: () => {
        try {
            let template = fs.readFileSync('./templates/angularjs/service.ejs', 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = 'public/app/services/name'
            let filename = 'NameService.js'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename, js, 'utf8')

            log(chalk.green.bold('Angular Service Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating AngularJS Service'))
            log(chalk.yellow(e))
            exit(1)
        }
    }
}
