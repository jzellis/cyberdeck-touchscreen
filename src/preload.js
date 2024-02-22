const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("items", {
  loadConfig: () => ipcRenderer.invoke("loadConfig"),
  launchItem: (item) => ipcRenderer.send("launchItem", item),
});
