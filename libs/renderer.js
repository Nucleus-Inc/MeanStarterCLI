const ejs = require('ejs')
const fs = require('fs')
const chalk = require('chalk')
const log = console.log
const dir = require('./dir.js')
const path = require('path')

module.exports = {
    renderExpressController: (_target, _filename) => {
        console.log(__dirname)
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '../templates/express/controller.ejs'), 'utf-8')
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
    renderExpressRoute: (_target, _filename) => {
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '../templates/express/route.ejs'), 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'app/routes/hello'
            let filename = _filename || 'index'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename + '.js', js, 'utf8')

            log(chalk.green.bold('Express Route Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Express Route'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderExpressLib: (_target, _filename) => {
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '../templates/express/lib.ejs'), 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'app/libs/hello'
            let filename = _filename || 'index'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename + '.js', js, 'utf8')

            log(chalk.green.bold('Express Lib Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Express Lib'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderExpressModel: (_target, _filename) => {
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '../templates/express/model.ejs'), 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'app/models'
            let filename = _filename || 'User'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename + '.js', js, 'utf8')

            log(chalk.green.bold('Express Model Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Express Model'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderExpressSpec: (_target, _filename) => {
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '../templates/express/spec.ejs'), 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'specs/resources/hello'
            let filename = _filename || 'index.spec'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename + '.spec.js', js, 'utf8')

            log(chalk.green.bold('Mocha Spec Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating Mocha Spec'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderNgDirective: (_target, _filename) => {
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '../templates/express/directive.ejs'), 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'public/app/directives/name'
            let filename = _filename || 'name'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename + '.js', js, 'utf8')

            log(chalk.green.bold('Angular Directive Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating AngularJS Directive'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderNgController: (_target, _filename) => {
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '../templates/angularjs/controller.ejs'), 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'public/app/controllers/name'
            let filename = _filename || 'NameCtrl'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename + '.js', js, 'utf8')

            log(chalk.green.bold('Angular Controller Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating AngularJS Controller'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderNgFactory: (_target, _filename) => {
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '../templates/angularjs/factory.ejs'), 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'public/app/factories/name'
            let filename = _filename || 'NameFactory'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename + '.js', js, 'utf8')

            log(chalk.green.bold('Angular Factory Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating AngularJS Factory'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderNgFilter: (_target, _filename) => {
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '../templates/angularjs/filter.ejs'), 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'public/app/filters/name'
            let filename = _filename || 'Name'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename + '.js', js, 'utf8')

            log(chalk.green.bold('Angular Filter Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating AngularJS Filter'))
            log(chalk.yellow(e))
            exit(1)
        }
    },
    renderNgService: (_target, _filename) => {
        try {
            let template = fs.readFileSync(path.resolve(__dirname, '../templates/angularjs/service.ejs'), 'utf-8')
            let js = ejs.render(template, {
                data: {}
            })
            let targetDir = _target || 'public/app/services/name'
            let filename = _filename || 'NameService'

            dir.mkDirByPathSync(targetDir)

            fs.writeFileSync('./' + targetDir + '/' + filename + '.js', js, 'utf8')

            log(chalk.green.bold('Angular Service Generated !'))
        } catch (e) {
            log(chalk.red.bold('Error while generating AngularJS Service'))
            log(chalk.yellow(e))
            exit(1)
        }
    }
}
