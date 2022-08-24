const {contextBridge, ipcRenderer} = require("electron");

const API = {
  window: {
    close: () => ipcRenderer.send("close-app"),
    minimize: () => ipcRenderer.send("minimize-app"),
    maximize: () => ipcRenderer.send("toggle-maximize-app"),
    openWorkspace: (url) => ipcRenderer.send("open-workspace", url)
  }
}

contextBridge.exposeInMainWorld("api", API);