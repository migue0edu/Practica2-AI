const {app, BrowserWindow, Menu, dialog} = require('electron');
const {TILEALT, TILELONG, MAZE} = require('./misc/tiles');

const {leerArchivo} = require('./misc/map');

let file = 'maze.txt';
global.mapa = leerArchivo(file);
global.tilealt = TILEALT;
global.tilelong = TILELONG;
global.maze = MAZE;
global.tipo = 'maze';
global.initialPos = {x: 0, y:0};
global.endPos = {x:0, y:0};
global.solutionTree = {tree: ''};

let win;
let child;

const template = [
    {
        label: 'Load file',
        click() {
            global.mapa = leerArchivo(dialog.showOpenDialog({properties: ['openFile']})[0]);
            instanceChild();
            child.show();
            child.on('close', () => {
                win.reload();
            });
        }
    },
    {
        label: 'Reload',
        click() {
            win.reload();
        }
    },
    {
        label: 'Show Tree',
        click() {
            //console.log(solutionTree);
            child2 = new BrowserWindow({ width: 500, height: 800, parent: win, modal: true, show: false});
            child2.loadFile('dialogs/treegraphic.html');
            child2.show();
        }
    },
    {
        label: 'Console',
        role: 'toggleDevTools'
    }
];

function instanceChild(){
    child = new BrowserWindow({webPreferences: {nodeIntegrationInWorker: true}, width: 450, height: 221, parent: win, modal: true, show: false});
    child.loadFile('dialogs/posInicial.html');
    child.setAutoHideMenuBar(true);
    child.setMenuBarVisibility(false);
}

function createWindow () {
    win = new BrowserWindow({width: 900, height: 560, resizable: false, show: false});
    win.loadFile('maze.html');
    instanceChild();

    win.once('ready-to-show', () => {
        Menu.setApplicationMenu(Menu.buildFromTemplate(template));
        win.show();
    });
    child.on('ready-to-show', () => {
        child.show();
    });
    child.on('closed', () => {
            win.reload();
        console.log(`Start: [ x: ${global.initialPos.y}, y: ${global.initialPos.x} ]`);
        console.log(`End: [ x: ${global.endPos.y}, y: ${global.endPos.x} ]`);
    });
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});
