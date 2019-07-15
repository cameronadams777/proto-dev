import { app, Menu } from 'electron'

export default () => {
  const appName = app.getName()

  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Fiddle',
          accelerator: 'CommandOrControl+N',
          click () {
            global.mainWindow.send('create-new-fiddle')
          }
        },
        { type: 'separator' },
        {
          label: 'Open...',
          accelerator: 'CommandOrControl+O',
          click () {
            global.mainWindow.send('open-fiddle')
          }
        },
        {
          type: 'separator'
        },
        {
          label: 'Save',
          accelerator: 'CommandOrControl+S',
          click () {
            global.mainWindow.send('save-fiddle')
          }
        },
        {
          label: 'Save As',
          accelerator: 'CommandOrControl+Shift+S',
          click () {
            global.mainWindow.send('save-new-fiddle')
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'Selection',
      submenu: [{ role: 'selectall' }]
    },
    {
      label: 'View',
      submenu: [{ role: 'togglefullscreen' }]
    },
    {
      role: 'window',
      submenu: [{ role: 'minimize' }, { role: 'close' }, { role: 'quit' }]
    },
    {
      role: 'help',
      submenu: [{ role: 'reload' }, { role: 'toggledevtools' }]
    }
  ]

  if (process.platform === 'darwin') {
    menuTemplate.unshift({
      label: appName,
      submenu: [{ role: 'about' }, { role: 'quit' }]
    })
  }

  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate))
}
