let posX = Number.parseInt(INIT.y);
let posY = Number.parseInt(INIT.x);

function actualizarJugador(x, y){
    let ctx2 = layer2.getContext('2d');
    ctx2.drawImage(image, (x)*TILELONG, (y)*TILEALT, TILELONG, TILEALT);
}

function limpiarJugador(x, y) {
    let ctx2 = layer2.getContext('2d');
    ctx2.clearRect((x)*TILELONG, (y)*TILEALT, TILELONG, TILEALT);
}

function quitarNiebla(x, y){
    let ctxl = layer1.getContext('2d');
    ctxl.clearRect(x*TILELONG, y*TILEALT, TILELONG, TILEALT);
    ctxl.clearRect((x+1)*TILELONG, y*TILEALT, TILELONG, TILEALT);
    ctxl.clearRect((x-1)*TILELONG, y*TILEALT, TILELONG, TILEALT);
    ctxl.clearRect(x*TILELONG, (y+1)*TILEALT, TILELONG, TILEALT);
    ctxl.clearRect(x*TILELONG, (y-1)*TILEALT, TILELONG, TILEALT);
}

function actualizarPosicion(dir){
    let ctx2 = layer2.getContext('2d');
    switch (dir){
        case 'R':
            if( (posX === mapa[0].length - 1) || (mapa[posY][posX + 1] === '0') || datamap[posY][posX+1].includes('v')){
                posX = posX;
                return false;
            }else{
                ctx2.clearRect(posX*TILELONG, (posY)*TILEALT, TILELONG, TILEALT);
                posX += 1;
                actualizarDatos(posX, posY, posX-1, posY);
            }
            break;

        case 'L':
            if( (posX === 0) || (mapa[posY][posX - 1] === '0') || datamap[posY][posX-1].includes('v') ){
                posX = posX;
                return false;
            }else{
                ctx2.clearRect(posX*TILELONG, (posY)*TILEALT, TILELONG, TILEALT);
                posX -= 1;
                actualizarDatos(posX, posY, posX+1, posY);
            }

            break;

        case 'D':
            if( (posY === mapa.length - 1) || (mapa[posY + 1][posX] === '0') || datamap[posY+1][posX].includes('v') ){
                posY = posY;
                return false;
            }else{
                ctx2.clearRect(posX*TILELONG, (posY)*TILEALT, TILELONG, TILEALT);
                posY += 1;
                actualizarDatos(posX, posY, posX, posY-1);
            }
            break;

        case 'U':
            if( (posY === 0) || (mapa[posY - 1][posX] === '0') || datamap[posY-1][posX].includes('v') ){
                posY = posY;
                return false;
            }else{
                ctx2.clearRect(posX*TILELONG, (posY)*TILEALT, TILELONG, TILEALT);
                posY -= 1;
                actualizarDatos(posX, posY, posX, posY+1);
            }
            break;
    }
    esDescicion(posX, posY);
    quitarNiebla(posX, posY);
    actualizarJugador(posX, posY);
    return true;
}
