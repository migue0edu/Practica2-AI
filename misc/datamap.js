let datamap = new Array(mapa.length);

for (let i = 0; i < mapa.length; i++) {
    datamap[i] = new Array(mapa[0].length);
}

for (let i = 0; i < datamap.length; i++) {
    for (let j = 0; j < datamap[0].length; j++) {
        datamap[i][j] = '-';
    }
}

datamap[INIT.x][INIT.y] = 'Ix';
datamap[END.x][END.y] = 'F';

function mostrarDatos() {
    let mapInfoSwitch = document.getElementById('mapInfo');
    if (layer3.getContext) {
        let ctx3 = layer3.getContext('2d');
        if(mapInfoSwitch.checked === false ){
            document.getElementById('layer2').style.display = 'initial';
            ctx3.clearRect(0,0, layer3.width, layer3.height)
        } else {
            document.getElementById('layer2').style.display = 'none';
            ctx3.font = "12px Arial Black";
            ctx3.fillStyle = 'blue';
            for (let i = 0; i < datamap.length; i++) {
                for (let j = 0; j < datamap[0].length; j++) {
                    if(datamap[i][j] !== '-'){
                        let chars = datamap[i][j].split('');
                        ctx3.fillText(chars.join(','), (j * TILELONG)+TILELONG*.3, (i * TILEALT)+TILEALT*.75);
                    }
                }
            }
        }
    }
}

function actualizarDatos(y, x, antY, antX){
    switch (datamap[x][y]){
        case '-':
            datamap[x][y] = 'x';
            break;
        case 'v':
            datamap[x][y] = 'vx';
            break;
        case 'F':
            datamap[x][y] = 'Fx';
            break;
        case 'ov':
            datamap[x][y] = 'ovx';
            break;
        case 'Iv':
            datamap[x][y] = 'Ivx';
            break;
        case 'Iov':
            datamap[x][y] = 'Iovx';
            break;
    }

    let anterior = datamap[antX][antY];
    switch (anterior){
        case 'Ix':
            datamap[antX][antY] = 'Iv';
            break;
        case 'ox':
            datamap[antX][antY] = 'ov';
            break;
        case 'vx':
            datamap[antX][antY] = 'v';
            break;
        case 'Iox':
            datamap[antX][antY] = 'Iov';
            break;
        case 'x':
            datamap[antX][antY] = 'v';
            break;
        case 'Ivx':
            datamap[antX][antY] = 'Iv';
            break;
        case 'Iovx':
            datamap[antX][antY] = 'Iov';
            break;
        case 'ovx':
            datamap[antX][antY] = 'ov';
            break;
        case 'Fx':
            datamap[antX][antY] = 'Fv';
            break;
    }
}

function esDescicion(y, x){
    let opciones = 0;

    if(x < mapa[0].length -1) {
        if (mapa[x + 1][y] === '1') {
            opciones++;
        }
        if (datamap[x + 1][y].includes('v'))
            opciones--;
    }

    if(x > 0) {
        if (mapa[x - 1][y] === '1') {
            opciones++;
        }
        if (datamap[x - 1][y].includes('v'))
            opciones--;
    }

    if(y < mapa.length -1) {
        if (mapa[x][y + 1] === '1') {
            opciones++;
        }
        if (datamap[x][y + 1].includes('v'))
            opciones--;
    }

    if(y > 0) {
        if (mapa[x][y - 1] === '1') {
            opciones++;
        }
        if (datamap[x][y - 1].includes('v'))
            opciones--;
    }


    if(opciones > 1){
        if(datamap[x][y] === 'v')
            datamap[x][y] = 'ov';
        if(datamap[x][y] === 'Ix')
            datamap[x][y] = 'Iox';
        if(datamap[x][y] === 'x')
            datamap[x][y] = 'ox';
        if(datamap[x][y] === 'vx')
            datamap[x][y] = 'vox';
    }
}

function nuevaPosicionActual(y,x) {
    let data = datamap[x][y];
    if(data === 'Iov'){
        datamap[x][y] = 'Iovx';
    }
    if(data === 'ov'){
        datamap[x][y] = 'ovx';
    }
}

function limpiardesicion(y,x){
    let data = datamap[x][y];
    if(data === 'Iovx'){
        datamap[x][y] = 'Iov';
    }
    if(data === 'ovx'){
        datamap[x][y] = 'ov';
    }
}

function esFinal(y,x) {
    return datamap[x][y].includes('F');

}

