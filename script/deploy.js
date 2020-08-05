const spawn = require('cross-spawn')

const PUBLISH_TYPE = ['patch', 'minor', 'major']
const actionIndex = PUBLISH_TYPE.indexOf(process.argv[2])
const action = PUBLISH_TYPE[actionIndex] || 'patch'

spawn.sync('npm', ['version', action], {
  stdio: 'inherit'
})

spawn.sync('git', ['push', '-f'], {
  stdio: 'inherit'
})