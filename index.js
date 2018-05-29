const program = require('commander')
const log = console.log
const chalk = require('chalk')
var commands = require('./commands')(program)

program
    .version('0.1.0')

program.parse(process.argv)