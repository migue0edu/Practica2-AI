let obtenerTipoTerreno = () =>{
    let numx = document.getElementById('cordX');
    let numy = document.getElementById('cordY');
    let resp = document.getElementById('tipoTerreno');

    let x = numx.value;
    let y = numy.value;
    switch (mapa[x][y]){
        case '0': resp.innerText = 'Wall';
                  break;

        case '1': resp.innerText = 'Road';
                  break;

        default: resp.innerText = 'Wall';
    }
};

let actualizarTipoTerreno = () =>{
    let numx = document.getElementById('cordX');
    let numy = document.getElementById('cordY');
    let nuevoTerreno = document.getElementById('newTerrain');

    let x = numx.value;
    let y = numy.value;
    let terreno = nuevoTerreno.value;

    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        switch (terreno) {
            case '0':
                ctx.fillStyle = MAZE.WALL;
                break;

            case '1':
                ctx.fillStyle = MAZE.ROAD;
                break;

            default:
                ctx.fillStyle = 'rgb(0, 0, 0)';
        }
        mapa[x][y] = terreno;
        obtenerTipoTerreno();
        ctx.fillRect((Number.parseInt(y)+1)*TILELONG, (Number.parseInt(x)+1)*TILEALT, TILELONG, TILEALT);
        ctx.strokeRect((Number.parseInt(y)+1)*TILELONG, (Number.parseInt(x)+1)*TILEALT, TILELONG, TILEALT);
    }
};



