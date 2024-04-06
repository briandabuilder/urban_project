class Game {
    constructor(selectedBlock, money, score, grid, complete) {
        const tileSizeX = 50;
        const tileSizeY = 50;

        const xSidebarOffset = 100;
        const ySidebarOffset = 400;

        this.selectedBlock = selectedBlock; // when Null, nothing is selected
        this.money = money; // how much spending money we have
        this.complete = complete; // is game over
        this.score = score; 
        this.grid = grid;
        
        // hashtable values are in form: key, cost value, quantity, area per cluster, moveable?, added CO2

        let ht = {
            "nat": [0, 290, [1, 1], false, 0], // nature
            "res": [100, 4, [2, 2], false, 0], // residential
            "road": [100, 0, [1, 1], true, 20], // road
            "rail": [100, 0, [1, 1], true, 10],
            "g": [100, 0, [1, 1], true, 15], // green road
            "rec": [100, 0, [4, 4], true, 0], // recreational
            "occ": [100, 6, [3, 3], false, 0] // occupational
        }

        let gameMap = [
            [null, null, null],
            [null, null, null],
            [null, null, null]  

        ]
    }

    updateGame(){
        this.updateMoney()
    }

    updateMoney (removedBlock, addedBlock) {
        moneyBack = ht[removedBlock][0];
        moneySpent = ht[addedBlock][0];
        money = money - moneySpent + moneyBack;
    }

    isEditable (x, y) {
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

    popWarning(message) {
        // should display a warning with message
    }

    onSubmit() {

    }
}