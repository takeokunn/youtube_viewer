const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

const INITIAL_WINDOW = {
    WIDTH: 1200,
    HEIGHT: 800
};

process.on('uncaughtException', err => console.log('uncaughtException occured'));

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

const create_browser_window = () => {
    if (mainWindow !== null) return;
    mainWindow = new BrowserWindow({ width: INITIAL_WINDOW.WIDTH, height: INITIAL_WINDOW.HEIGHT });
    mainWindow.loadURL('file://' + __dirname + '/../public/index.html');
    mainWindow.on('closed', () => mainWindow = null);
};

app.on('ready', create_browser_window);
app.on('activate', create_browser_window);
