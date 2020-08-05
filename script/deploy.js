const spawn = require('cross-spawn')

spawn.sync('npm', ['hi'], {
  stdio: 'inherit'
})

