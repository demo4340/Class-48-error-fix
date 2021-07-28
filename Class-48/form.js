class Form{

    constructor() {
          
        this.nameInput = createInput('Your Name');

        this.kit1 = createButton("Kit 1");
        this.kit2 = createButton("Kit 2");
        this.kit3 = createButton("Kit 3");

        this.text1 = createElement('h2');
        this.goalText = createElement('h2');

        this.kits = createElement('h2');

        this.playButton = createButton('Play');

        this.greeting = createElement('h1');

        this.goalInfo = createElement('h3');

        this.waitMessage = createElement('h2');

        this.chance = createElement('h2');

        this.selectPlayer = createButton('I want to be a Player');
        this.selectPlayer.hide();
        this.selectHunter = createButton('I want to be a Hunter');
        this.selectHunter.hide();

        this.readyConfirm = createButton("I'm Ready!");

        this.waitMessage2 = createElement('h3');

    }

    hide(){

        this.kit1.hide();
        this.kit2.hide();
        this.kit3.hide();
        this.playButton.hide();
        this.greeting.hide();
        this.kits.hide();
        this.text1.hide();
        this.goalText.hide();
        this.nameInput.hide();
        this.goalInfo.hide();
        this.waitMessage.hide();
        this.readyConfirm.hide();
        this.waitMessage2.hide();
        this.selectPlayer.hide();
        this.selectHunter.hide();
        this.chance.hide();

    }

    display(){
        
        strokeWeight(1);
        stroke("white");
       
        this.text1.html("Please enter your name : ");
        this.text1.style('color', "white");
        this.text1.position(250, 100);
        
        this.nameInput.position(550, 125);
        this.nameInput.style('background-color', "pink");
        
        this.goalText.html("Goal : ");
        this.goalText.style('color', "white");
        this.goalText.position(250, dHeight/2 - 95);

        this.goalInfo.html("Please select a kit to display your goal first");
        this.goalInfo.style('color', "white");
        this.goalInfo.position(350, dHeight/2 - 90);

        this.playButton.position(displayWidth/2, displayHeight-200);
        
        this.kits.html("Kits : ");
        this.kits.style('color', "white");
        this.kits.position(250, 450);

        this.kit1.position(345, 530);
        this.kit1.style('background-color', "lightgreen");

        this.kit2.position(445, 530);
        this.kit2.style('background-color', "lightgreen");

        this.kit3.position(545, 530);
        this.kit3.style('background-color', "lightgreen");

        playerSprite = createSprite(displayWidth/2 + 375, displayHeight/2 -100);
        playerSprite.scale = 2.1;
        playerSprite.addAnimation("player", playerFrontImg);

        var kitShow = createSprite(displayWidth /2 , displayHeight /2 + 75);
        kitShow.addImage("kitImg", kitShowImg);
        kitShow.scale = 1.1;
        kitShow.visible = true;

        this.kit1.mousePressed(()=>{

            player.choosenKit = "Kit1";
            this.goalInfo.html("As archer stay behind the lines and deal damage to bosses and players");
            this.goalInfo.position(displayWidth /2 - 450, dHeight/2 - 90);

            kitShow.visible = true;
            kitShow.addImage("kitImg", kitShowImg);

        })

        this.kit2.mousePressed(()=>{

            player.choosenKit = "Kit2";
            this.goalInfo.html("Fast and quick, as a swordsman engage the enemy but with caution");
            this.goalInfo.position(displayWidth /2 - 450, dHeight/2 - 90);

            kitShow.visible = true;
            kitShow.addImage("kitImg", kitShowImg2);
            
        })

        this.kit3.mousePressed(()=>{

            player.choosenKit = "Kit3";
            this.goalInfo.html("Charge in or stay back, the trident is a versatile weapon but can slow you down");
            this.goalInfo.position(displayWidth/2 - 450, dHeight/2 - 90);

            kitShow.visible = true;
            kitShow.addImage("kitImg", kitShowImg3);
            
        })


        var firstKit = createSprite(displayWidth/5 + 75, displayHeight - 380, 50, 50);
        firstKit.addImage("kit", kit1img);
        firstKit.scale = 0.2;
        
        var secKit = createSprite(displayWidth/5 + 175, displayHeight - 380, 50, 50);
        secKit.addImage("kit", kit2img);
        secKit.scale = 0.2;
        
        var thirdKit = createSprite(displayWidth/5 + 275, displayHeight - 380, 50, 50);
        thirdKit.addImage("kit", kit3img);
        thirdKit.scale = 0.2;

        this.playButton.mousePressed(()=>{

            this.nameInput.hide();
            this.playButton.hide();
            this.kit1.hide();
            this.kit2.hide();
            this.kit3.hide();
            this.goalText.hide();
            this.text1.hide();
            this.kits.hide();
            firstKit.remove();
            secKit.remove();
            thirdKit.remove();
            this.goalInfo.hide();
            kitShow.remove();
            playerSprite.remove();

            this.selectPlayer.show();
            this.selectHunter.show();
            
            player.name = this.nameInput.value();
            playerCount+=1;
            player.index = playerCount;
            player.update(player.name);
            player.updateCount(playerCount);

            
            this.kit1.mousePressed(()=>{

                player.updateKit(1);

            })

            this.kit2.mousePressed(()=>{

                player.updateKit(2);

            })

            this.kit3.mousePressed(()=>{

                player.updateKit(3);

            })
            
            this.greeting.html("Welcome " + player.name + " to Dungeon Escape !");
            this.greeting.style("color", "black");
            this.greeting.position(displayWidth/2 - 250, 30);

            this.waitMessage.html("Please wait as you are player number " + (playerCount) + " . Few more players have to join !");
            this.waitMessage.style("color", "black");
            this.waitMessage.position(displayWidth/2 - 375, 120); 
            
            this.readyConfirm.position(displayWidth/2 - 50, displayHeight / 2 + 100);

            this.chance.html("Your chance of becoming player is " + player.luck + "%");
            this.chance.style("color", "black");
            this.chance.position(displayWidth / 2 - 250, 200);

            this.selectPlayer.position(displayWidth /2 - 200, 400);
            this.selectHunter.position(displayWidth /2, 400);

            this.selectHunter.mousePressed(()=>{

                player.luck = player.luck - 10;
                this.chance.html("Your chance of becoming player is " + player.luck + "%");
                this.selectHunter.hide();
                this.selectPlayer.hide();

                player.update();

            });

            this.selectPlayer.mousePressed(()=>{

                player.luck = player.luck + 10;
                this.chance.html("Your chance of becoming player is " + player.luck + "%");
                this.selectPlayer.hide();
                this.selectHunter.hide();

                player.update();

            });

            this.readyConfirm.mousePressed(()=>{

                readyCount = readyCount + 1;
                this.selectHunter.hide();
                this.selectPlayer.hide();
                player.ready = true;
                player.update();

            });

        });
        
    }

    waitMessage(){

        this.waitMessage2.html("Please wait as");

    }
    

}


