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
        
        // hashtable values are in form: key, cost value, quantity, area per cluster, moveable?, added CO2, happiness

        let blocks = {
            nat: [0, 270, [1, 1], false, 0, 10], // nature
            res: [100, 12, [2, 2], false, 0, 0], // residential
            road: [100, 0, [1, 1], true, 20, 5], // road
            rail: [100, 0, [1, 1], true, 10, 7], // rail
            green: [100, 0, [1, 1], true, 15, 6], // green road
            rec: [100, 0, [4, 4], true, 0, 10], // recreational
            occ: [100, 18, [3, 3], false, 0, 0] // occupational
        }

        let gameMap = [
            [blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.nat, blocks.res, blocks.res, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.nat, blocks.res, blocks.res, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.occ, blocks.occ, blocks.occ, blocks.nat],
            [blocks.nat, blocks.res, blocks.res, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.occ, blocks.occ, blocks.occ, blocks.nat],
            [blocks.nat, blocks.res, blocks.res, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.occ, blocks.occ, blocks.occ, blocks.nat],
            [blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.res, blocks.res, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.occ, blocks.occ, blocks.occ, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.res, blocks.res, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.occ, blocks.occ, blocks.occ, blocks.nat, blocks.nat],
            [blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.nat, blocks.occ, blocks.occ, blocks.occ, blocks.nat, blocks.nat]
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

    popWarning(message) {
        // should display a warning with message
    }

    onSubmit() {

    }
}