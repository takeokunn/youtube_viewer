const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

const INITIAL_WINDOW = {
    WIDTH: 1200,
    HEIGHT: 800
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: INITIAL_WINDOW.WIDTH, height: INITIAL_WINDOW.HEIGHT });
    mainWindow.loadURL('file://' + __dirname + '/../public/index.html');
    mainWindow.on('closed', () => mainWindow = null);
});
