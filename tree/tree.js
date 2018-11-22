function Node(father, coords) {
    this.father = father;
    this.childs = [];
    this.coords = coords;
}

function Tree() {
    this.nodes = [];
    this.solved = false;
}

Tree.prototype.addNode = function(father, coords) {
        if(father === 'root' && this.nodes.length === 0){
            this.nodes.push(new Node(0, coords));
        }
        else{
            let index = this.nodes.findIndex(x => x.coords === father);
            if(index === -1){
                console.log(`Father doesn't exist.`);
                return;
            }
            this.nodes.push(new Node(index, coords));
            this.nodes[index].childs.push(this.nodes.length-1);
        }
    };
Tree.prototype.removeNode = function(coords){
        let index = this.nodes.findIndex(x => x.coords === coords);
        if(this.nodes[index].childs.length > 0){
            console.log(`Can't remove. The node has childs.`);
            return;
        }
        this.nodes.splice(index,1);
};

Tree.prototype.setFather = function (father, nodeCoord) {
    for(let node of this.nodes){
        if(node.coords === nodeCoord){
            let index = this.nodes.findIndex(x => x.coords === father);
            node.father = index;
            return;
        }
    }
};

Tree.prototype.setCoord = function (coords, nodeCoord) {
    for(let node of this.nodes){
        if(node.coords === nodeCoord){
            node.coords = coords;
            return;
        }
    }
};

Tree.prototype.removeChilds = function(nodeCoord){
    for(let node of this.nodes){
        if(node.coords === nodeCoord){
            node.childs.splice(0,node.childs.length);
            return;
        }
    }
};

Tree.prototype.removeChild = function(removeChild, nodeCoord){
    for(let node of this.nodes){
        if(node.coords === nodeCoord){
            let index = this.nodes.findIndex(x => x.coords === removechild);
            let cIndex = node.childs.findIndex(y => y === index);
            node.childs = node.childs.splice(cIndex, 1);
            return;
        }
    }
};

Tree.prototype.addChild = function (child, nodeCoord) {
    for (let node of this.nodes) {
        if (node.coords === nodeCoord) {
            let index = this.findIndex(x => x.coords === child);
            node.childs.push(index);
            return;
        }
    }
};


Tree.prototype.setSolved = function () {
   this.solved = true;
};

Tree.prototype.getValueCoords =  function (index) {
    let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'];
    let y = this.nodes[index].coords.charAt(0);
    let x = chars.indexOf(this.nodes[index].coords.charAt(1));
    y = Number.parseInt(y);
    x = Number.parseInt(x);
    return {x , y};
};

Tree.prototype.findNode = function (cords) {
  for(let i=0; i<this.nodes.length; i++){
      if(this.nodes[i].coords === cords){
          return {index: i, node: this.nodes[i]}
      }
  }
  return false;
};

Tree.prototype.getCoordsofNode = function (index) {
    return this.nodes[index].coords;
};