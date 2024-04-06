// not super sure how to do this cursor stuff, but ideally, this is just the trigger points for the Game and 
// also runs it
function run(){ 
    game = new Game(Null, 100000, 0, Null, false);
}
document.addEventListener('click', function (event) {
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
    if (isEditable(x, y) && selectedBlock != null) {
        // should change something with hover how the tile hovered over is being displayed
        print("hello");
    }

}

window.onresize = function () {
    // Get the window height and width
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Do something with the window height and width
    console.log(width, height);
}