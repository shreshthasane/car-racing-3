class Player{

    constructor(){
this.name = null ;
this.distance = 0;
//forstartposition
this.index = null;
    }

getCount(){
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value",function(data){
        playerCount = data.val();
    });
}

updateCount(count){
    database.ref("/").update({
        playerCount:count

    })
}

update(){
    var playerIndex = "players/player "+ this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance

    })
}

static getPlayerinfo(){
var playInforef = database.ref("players");
playInforef.on("value", (data)=>{
    allPlayers = data.val();
})
}
}