const {contextBridge, ipcRenderer} = require("electron");

const API = {
  window: {
    close: () => ipcRenderer.send("close-app"),
    minimize: () => ipcRenderer.send("minimize-app"),
    maximize: () => ipcRenderer.send("toggle-maximize-app"),
  }
}

contextBridge.exposeInMainWorld("api", API);