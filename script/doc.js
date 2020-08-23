const spawn = require('cross-spawn')

spawn.sync('yarn', ['doc'], {
  stdio: 'inherit'
})

spawn.sync('mv', ['./doc/*', '.', '-f'], {
  stdio: 'inherit'
})

spawn.sync('git', ['checkout', 'doc-page', '-f'], {
  stdio: 'inherit'
})

spawn.sync('git', ['add', '.'], {
  stdio: 'inherit'
})

spawn.sync('git', ['commit', '-m', 'feat: 发布doc页面'], {
  stdio: 'inherit'
})

spawn.sync('git', ['push', 'origin', 'doc-page'], {
  stdio: 'inherit'
})

spawn.sync('git', ['checkout', '-'], {
  stdio: 'inherit'
})