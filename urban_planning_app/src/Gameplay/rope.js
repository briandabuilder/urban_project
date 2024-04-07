let roadTTime = 1;


function pathCheck(board) {

    var dir = [ 
        [0, 1], [0, -1],
        [1, 0], [-1, 0]
    ];

    var ht = {};
    var visited = {};

    for(var x = 0; x < board.length; x++){
        for(var y = 0; y < board[0].length; y++){
            if (board[x][y] == "h"){
                ht[x.toString() + y.toString()] = [x, y, 0];
                visited[x.toString() + y.toString()] = 0;
            }
        }
    }

    while(ht.length > 0){
        let nht = {};

        for (var i = 0; i < ht.length; i++){
            var key = Object.keys(ht)[i];
            var val = ht[key];
            var coords = [val[0], val[1]];
            var travelTime = val[2];

            for(var i = 0; i < dir.length; i++){
                var nx = coords[0] + dir[i][0];
                var ny = coords[1] + dir[i][1];

                if (nx >= 0 && nx < board.length && ny >= 0 && ny < board[0].length){
                    if (board[nx][ny] == "r" && !((x.toString() + y.toString()) in visited[x])){
                        
                        nht[nx.toString() + ny.toString()] = [nx, ny, travelTime + roadTTime];
                        visited[nx.toString() + ny.toString()] = 0;
                    } 
                    else if (board[nx][ny] == "o" && !((x.toString() + y.toString()) in visited[x])){
                        // interactions for other types of things
                    }
                }
            }
        }

        ht = nht;
    }
}