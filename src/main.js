const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {

  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  /* Default url of your react app */
  win.loadURL('http://localhost:3000/')
}

app.on('ready', createWindow)