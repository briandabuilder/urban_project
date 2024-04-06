function pathCheck(board) {

    var dir = [ 
        [0, 1], [0, -1],
        [1, 0], [-1, 0]
    ];

    var ht = {};

    for(var x = 0; x < board.length; x++){
        for(var y = 0; y < board[0].length; y++){
            if (board[x][y] == "h"){
                ht[x.toString() + y.toString()] = [x, y];
            }
        }
    }

    while ()

}