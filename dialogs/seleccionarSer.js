let seres = document.getElementById('ser');

let beings = ['Human', 'Octopus', 'Monkey', 'Sasquatch'];

for(let i=0; i<beings.length; i++){
    let option = document.createElement('option');
    option.text = beings[i];
    option.value = beings[i];
    seres.add(option);
}

let instanceI = M.FormSelect.init(seres, {});


function setBeing(){
    require('electron').remote.getGlobal('being').name = seres.value;
    window.close();
}