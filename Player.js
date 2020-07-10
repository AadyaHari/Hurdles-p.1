class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rand = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCAE(){
    database.ref("CAE").on("value", (data)=>{
      this.rank = data.val();

    })
  }
  static updateCAE(rank){
    database.ref("/").update({
      CAE:rank
    })
  }
  updateCAEcount(count){
  console.log(count);
    database.ref('/').update({
      CAE: count
    });
  }
}
