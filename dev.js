
//值得注意的是electron 6.x在启用dev tools后，某些情况下无法运行
//具体请见：https://github.com/electron/electron/issues/19468
require('electron-debug')()

require('./index.js')