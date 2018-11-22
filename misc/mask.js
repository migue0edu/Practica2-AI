if(layer1.getContext){
    let ctx1 = layer1.getContext('2d');
    ctx1.fillStyle = "rgba(1, 1, 1, 1)";
    ctx1.fillRect(0, 0, layer1.width, layer1.height);
    ctx1.fillStyle = "rgba(33, 33, 33, 0)";
    let posIy = Number.parseInt(INIT.y);
    let posIx = Number.parseInt(INIT.x);

    ctx1.clearRect(posIy*TILELONG, posIx*TILEALT, TILELONG, TILEALT);
    ctx1.clearRect((posIy - 1)*TILELONG, posIx*TILEALT, TILELONG, TILEALT);
    ctx1.clearRect((posIy + 1)*TILELONG, posIx*TILEALT, TILELONG, TILEALT);
    ctx1.clearRect(posIy*TILELONG, (posIx+1)*TILEALT, TILELONG, TILEALT);
    ctx1.clearRect(posIy*TILELONG, (posIx-1)*TILEALT, TILELONG, TILEALT);
}