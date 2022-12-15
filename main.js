const {app, BrowserWindow} = require('electron')
function createWindow() {
    let win = new BrowserWindow({
        width:800,
        height:600
    })

    win.webContents.loadURL('http://localhost:8080/')
    console.log(process.env.DEBUG)
}

app.whenReady().then(createWindow)