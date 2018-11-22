let mapa = require('electron').remote.getGlobal('mapa');
const TYPE = require('electron').remote.getGlobal('tipo');

let initX = document.getElementById('initX');
let initY = document.getElementById('initY');
let finalX = document.getElementById('finalX');
let finalY = document.getElementById('finalY');

let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'];

for (let i = 0; i < mapa[0].length; i++) {
    let option = document.createElement('option');
    option.text = chars[i];
    option.value = i;
    initY.add(option);
}

for (let i = 0; i < mapa[0].length; i++) {
    let option = document.createElement('option');
    option.text = chars[i];
    option.value = i;
    finalY.add(option);
}

initX.value = 0;
finalX.value = 0;

let instanceI = M.FormSelect.init(initY, {});
let instanceF = M.FormSelect.init(finalY, {});

function checarPosicionFinal(){
    if(TYPE === 'maze'){
        if(mapa[finalX.value][finalY.value] === '0'){
            alert('Invalid End position');
        }else{
            if(finalX ===  initX && finalY === initY){
                alert('End can´t be placed in the same position.');
            }
            else{
                require('electron').remote.getGlobal('endPos').x = finalX.value;
                require('electron').remote.getGlobal('endPos').y = finalY.value;
                window.close();
            }
        }
    }
    else{
        if(finalX ===  initX && finalY === initY){
            alert('End can´t be placed in the same position.');
        }
        else{
            require('electron').remote.getGlobal('endPos').x = finalX.value;
            require('electron').remote.getGlobal('endPos').y = finalY.value;
            window.close();
        }
    }
}

function checarPosicionInicial() {
    if(TYPE === 'maze'){
        if(mapa[initX.value][initY.value] === '0'){
            alert('Invalid Start position');
        }else{
            require('electron').remote.getGlobal('initialPos').x = initX.value;
            require('electron').remote.getGlobal('initialPos').y = initY.value;
            checarPosicionFinal();
        }
    }
    else{
        require('electron').remote.getGlobal('initialPos').x = initX.value;
        require('electron').remote.getGlobal('initialPos').y = initY.value;
        checarPosicionFinal();
    }

};