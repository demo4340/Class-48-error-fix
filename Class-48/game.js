class Game {
    constructor(){
        


    }
    
    getState(){

      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         
        gameState = data.val();

      })
     
    }
  
    update(state){

      database.ref('/').update({
        
        gameState : state

      });

    }
  
    start(){

      if(page === 2){

        button2.destroy();
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
        
      }

    }

    play(){
      
      game.getState();

      if(gameState === 1){

        Player.getPlayerInfo();

        var index = 0;
        //var plrluck = player.luck;
        var plrArray = [];
        var a;
    
        var plrReady = [];

        if(allPlayers !== undefined){

          for(var plr in allPlayers){

            //index = index + 1;

           // if(index === player.index){

              plrArray.push(allPlayers[plr].luck);
              plrReady.push(allPlayers[plr].ready);
              //console.log(plrReady);
              //console.log(plrReady);
              
              
            //}

            if(allPlayers[plr].ready === true){
              allReady = allReady + 1;
              console.log(allReady);
            }
            

          }

          for(var i = 0; i < plrArray.length; i++){

            a = plrArray[i];

              if(plrluck > a){
                player.state = "player";
                player.update();
              }
              else if(plrluck < a){
                player.state = "hunter";
                player.update();
              }

              /*if(plrReady[i] === true && playerCount >= 3 && plrReady.length === 3){

                allReady += 1;
                console.log(allReady);
              
              }*/
            
          }
          

        }

      }

    }

    gameStart(){

      if(gameState === 2){

        form.hide();   

      }

    }
    
  }
  
