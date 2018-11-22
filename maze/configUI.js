let numberX = document.getElementById('cordX');
let numberY = document.getElementById('cordY');
let nuevoTerreno = document.getElementById('newTerrain');
let tipoTerreno = document.getElementById('tipoTerreno');
let canvas = document.getElementById('canvas');
let layer1 = document.getElementById('layer1');
let layer2 = document.getElementById('layer2');
let layer3 = document.getElementById('layer3');

//----------Configuracion del mapa-----------------------------------
layer1.width = (TILELONG * mapa[0].length);
layer1.height = (TILEALT * mapa.length);
layer2.width = layer1.width;
layer2.height = layer1.height;
layer3.height = layer1.height;
layer3.width = layer1.width;
canvas.width = layer1.width + TILELONG;
canvas.height = layer1.height + TILEALT;

layer1.top = TILEALT + 5;
layer1.left = TILELONG + 5;
layer2.top = layer1.top;
layer2.left = layer1.left;
layer3.top = layer1.top;
layer3.left = layer1.left;

//----------Opciones e inicializacion de elementos-------------------
numberX.max = mapa.length - 1;
numberX.min = 0;
numberX.value = 0;

let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'];
let terrenos = ['Wall', 'Road'];

for (let i = 0; i < mapa[0].length; i++) {
    let option = document.createElement('option');
    option.text = chars[i];
    option.value = i;
    numberY.add(option);
}
for (let i = 0; i < terrenos.length; i++) {
    let option = document.createElement('option');
    option.text = terrenos[i];
    option.value = i;
    nuevoTerreno.add(option);
}

let instance = M.FormSelect.init(numberY, {});
instance = M.FormSelect.init(nuevoTerreno, {});


//-------------------------Configuracion de estilos------------------
let h5s = document.querySelectorAll('h5');
for (let i = 0; i < h5s.length; i++) {
    h5s[i].style.marginTop = '5px';
}
tipoTerreno.style.fontWeight = 'bold';
tipoTerreno.style.fontSize = '29x';
document.querySelector('label').style.color = 'Black';

let image = document.getElementById("source");
image.src = 'icons/face.png';
image.width = TILELONG;
image.height = TILEALT;