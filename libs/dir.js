const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const log = console.log

module.exports = {

  mkDirByPathSync: (targetDir, {isRelativeToScript = false} = {}) => {
    const sep = path.sep
    const initDir = path.isAbsolute(targetDir) ? sep : ''
    const baseDir = isRelativeToScript ? __dirname : '.'

    targetDir.split(sep).reduce((parentDir, childDir) => {
      const curDir = path.resolve(baseDir, parentDir, childDir)
      try {
        fs.mkdirSync(curDir)
        log(chalk.cyan(`Directory ${curDir} created!`))
      } catch (err) {
        if (err.code !== 'EEXIST') {
          throw err
        }
        //log(chalk.blue(`Directory ${curDir} already exists!`))
      }

      return curDir
    }, initDir)
  }
}
