const { ipcMain } = require('electron');
const electron = require('electron');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on("ready", function(){
  mainWindow = new BrowserWindow({
    icon: path.join(app.getAppPath(), "assets/icons/code_cube.ico"),
    frame: false,
    minWidth: 1024,
    minHeight: 600,
		webPreferences: {
			webgl: true,
			webSecurity: true,
			nodeIntegration: true,
			contextIsolation: true,
			enableRemoteModule: true,
      // devtools: false,
      preload: path.join(__dirname, "preload.js")
		}
    
  });
  mainWindow.loadFile(path.join(app.getAppPath(), "src/pages/project-view.html"));
})

ipcMain.on("close-app", () => {
  app.quit();
});
ipcMain.on("minimize-app", () => {
  mainWindow.minimize();
});
ipcMain.on("toggle-maximize-app", () => {
  mainWindow.isMaximized() ? mainWindow.restore() : mainWindow.maximize();
});