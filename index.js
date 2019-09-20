const { app, BrowserWindow } = require('electron')
const Path = require('path')


let win
function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    }

  })
  win.setMenu(null)
  win.loadFile(Path.join(__dirname,'/static/index.html'))
  win.on('closed', () => {
    win = null
  })
  win.once('ready-to-show', () => {
    win.show()
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

