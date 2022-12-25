const {app, BrowserWindow} = require('electron')

//const {items} = require('./items')
const db = require('./database')


function createWindow() {
    let win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    })
    if (! process.env.DEBUG) {
        win.webContents.loadURL('http://localhost:8081/')
        console.log(process.env.DEBUG)
        win.webContents.on('did-finish-load',() =>{
            //win.webContents.send('pr-items', items)
            db.item_all()
        })
    }
    // else {
    //     win.webContents.loadURL('https://github.com/')

        
    // }
    // win.webContents.openDevTools()

    db.create_db()
}

app.whenReady().then(createWindow)