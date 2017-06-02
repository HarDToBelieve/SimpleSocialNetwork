const electron = require('electron')

const fs = require('fs');
const mkdirp = require('mkdirp');
const jsonfile = require('jsonfile');

const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const INFO_FOLDER = '/SocialChannel/';
const INFO_FILE = INFO_FOLDER + 'user.json'

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

mkdirp(INFO_FOLDER, (err) => {
  if(err) {
    console.log(INFO_FOLDER + "is existing, no need to create it again");
});

if(!fs.existsSync(INFO_FILE)){
  jsonfile.writeFile(INFO_FILE, {}, (err) => {
                      if (err) return console.log(err.message);
                    });
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
