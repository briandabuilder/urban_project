let selectedBlock = null;
let tileSizeX = 50;
let tileSizeY = 50;

let xSidebarOffset = 100;
let ySidebarOffset = 400;

let money = 10000;

// hashtable values are in form: key, cost value, other characteristics
let ht = {
    "e": [0],
    "r": [100],
    "bl": [100],
    "r": [100],
    "r": [100]
}

// empty = "e", house = "h", road = "r", bike lane = "bl", bus lane = "bs", nature = "n";
let gameMap = [
    [null, null, null],
    [null, null, null],
    [null, null, null]  

]

document.addEventListener('click', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    
    if (x < xSidebarOffset && y < ySidebarOffset) {// this means there is likely a press on the sidebar
        
    }
    else {// press anywhere else means a press on the game
        addTile(x, y)
    }


})

function getCursor(event) {
    let x = event.clientX;
    let y = event.clientY;

    if (x < xSidebarOffset && y < ySidebarOffset) {// this means the mouse is over the sidebar
        sidebarHover(x, y);
    }
    else {

        tile_x = (window_x - xSidebarOffset) % tileSizeX;
        tile_y = (window_y - ySidebarOffset) % tileSizeY;
        tileHover(tile_x, tile_y);
    }
}

function tileHover(x, y) {

    if (isEditable(x, y) && selectedBlock!= null) {
        // should change something with hover how the tile hovered over is being displayed
        print("hello");
    }

}

window.onresize = function() {
    // Get the window height and width
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
  
    // Do something with the window height and width
    console.log(width, height);
}

function addTile(window_x, window_y) {
    tile_x = (window_x - xSidebarOffset) % tileSizeX;
    tile_y = (window_y - ySidebarOffset) % tileSizeY;

    if (isEditable(tile_x, tile_y) && selectedBlock!= null) {
        removedBlock = gameMap[tile_y][tile_x];
        gameMap[tile_y][tile_x] = selectedBlock;
        
        updateMoney(removedBlock, selectedBlock);
    }
    else {
        popWarning("Please select an editable tile");
    }
}

function updateMoney (removedBlock, addedBlock) {
    moneyBack = ht[removedBlock][0];
    moneySpent = ht[addedBlock][0];

    money = money - moneySpent + moneyBack;
}

function isEditable (x, y) {
    tile = gameMap[y][x];
    if (tile == null ||
        tile == "e" ||
        tile == "r" ||
        tile == "bl" ||
        tile == "bs") {
            return true;
        }
    else {
        return false;
    }
}

function popWarning(message) {
    // should display a warning with message
}

function onSubmit() {

}