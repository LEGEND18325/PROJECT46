class Player{

constructor(){

this.name=null;

this.distance=0;
this.points=0;
this.index=null;


 

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
      distance:this.distance,
      points:this.points
    });
  }



}