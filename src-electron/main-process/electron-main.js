import { app, BrowserWindow, ipcMain as ipc } from 'electron'
import initMenu from './init-menu'

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = require('path')
    .join(__dirname, 'statics')
    .replace(/\\/g, '\\\\')
}

function createWindow () {
  /**
   * Initialize the menu bar
   */
  initMenu()

  /**
   * Initial window options
   */
  global.mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    useContentSize: true
  })

  global.mainWindow.loadURL(process.env.APP_URL)

  global.mainWindow.on('closed', () => {
    global.mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (global.mainWindow === null) {
    createWindow()
  }
})
