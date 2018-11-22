require('../js/treantjs/Treant');
let gTree = require('electron').remote.getGlobal('solutionTree').tree;

let settings = {
    container: '#tree-simple',
    connectors: {type: 'step'}
};

let nodes = [];


for (let node of gTree.nodes){
    let newNode = {};
    if(nodes.length === 0){
        newNode.text = {name: node.coords};
    }
    else{
        newNode.text = {name: node.coords};
        newNode.parent = nodes[node.father];
    }
    nodes.push(newNode);
}


let node0 = {
    text: {name: gTree.nodes[0].coords}
};
let node1 = {
  text: {name: gTree.nodes[1].coords},
  parent: node0
};

let node2 = {
    text: {name: gTree.nodes[2].coords},
    parent: node1
};

let node3 = {
    text: {name: gTree.nodes[3].coords},
    parent: node1
};

let nodesT = [node0, node1, node2, node3];


let config = [
  settings
];

config = config.concat(nodes);

// let config = {
//     chart: {
//         container: '#tree-simple',
//         connectors: {type: 'step', style: {
//
//             }}
//     },
//     nodeStructure: {
//         text: {name: gTree.nodes[0].coords},
//         children: [
//             {
//                 text: {name: gTree.nodes[1].coords},
//                 children: [
//                     {
//                         text: {name: gTree.nodes[2].coords}
//                     },
//                     {
//                         text: {name: gTree.nodes[3].coords}
//                     }
//                 ]
//             }
//         ]
//     }
// };

let my_chart = new Treant(config);