const spawn = require('cross-spawn')

const PUBLISH_TYPE = ['patch', 'minor', 'major']
const actionIndex = PUBLISH_TYPE.indexOf(process.argv[2])
const action = PUBLISH_TYPE[actionIndex] || 'patch'


spawn.sync('git', ['add', '.'], {
  stdio: 'inherit'
})

spawn.sync('git', ['commit', '-m', 'feat: 发布hinus-ui新版本'], {
  stdio: 'inherit'
})

spawn.sync('npm', ['version', action], {
  stdio: 'inherit'
})

spawn.sync('git', ['push', '--tags', '-f'], {
  stdio: 'inherit'
})