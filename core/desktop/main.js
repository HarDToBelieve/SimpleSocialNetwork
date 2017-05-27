const fs = require('fs');
const jsonfile = require('jsonfile');
const axios = require('axios');
const mkdirp = require('mkdirp');
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

const {
    RESOURCE_FOLDER,
    TOKEN_FILE,
    resourceURL,
    createNoneExistInfoFiles
} = require('./helper.js');

mkdirp(RESOURCE_FOLDER, (err) => {
        if (err) console.log(resourceFolder + " is existing, no need to create it again");
});

if (fs.existsSync(TOKEN_FILE)) {
  jsonfile.readFile(TOKEN_FILE, (err, userInfo) => {
    if(userInfo.username && userInfo.password){
      axios.post(resourceURL + 'auth', {
        username: userInfo.username,
        password: userInfo.password
      }).then(res => {
        console.log(res.data);
        userInfo.access_token = res.data.access_token;
        jsonfile.writeFile(TOKEN_FILE, userInfo, (err) => {
          if(err) console.log(err);
          console.log('Got access token.');
        });
      }).catch(e => console.log('Login session error.'));
    } else{
      console.log("No user info available.")
    }
  });
} else {
  jsonfile.writeFileSync(TOKEN_FILE, {});
  console.log("Initialize token file.");
}


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 1920, height: 1080})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'static/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    setTimeout(createWindow(), 6000);
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
