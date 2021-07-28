//Create Variables to store data globally

var gameState = 0;
var playerCount;
var button, button2, button3, button4;
var dHeight = 0;
var dWidth = 0;
var starting;
var page = 0;
var allPlayers;
var database;
var allReady = 0;
var kit1, kit2, kit3;
var form, player, game;
var reset;
var choosenKitNumber;
var readiness;
var readyCount = 0;

//Create Variables for loading images

var playerSprite, playerFrontImg, playerRightImg, playerLeftImg;
var kit1img, kit2img, kit3img, kitShowImg;
var nextArrow, startImage, starting;
var backGround,  woodenBoardBack, backGroundStart;

//Create Walls

var FirstWall1, FirstWall2, FirstWall3, FirstWall4, FirstWall5, FirstWall6, FirstWall7, FirstWall8;
var ThirdWall1, ThirdWall2, ThirdWall3, ThirdWall4, ThirdWall5, ThirdWall6, ThirdWall7, ThirdWall8;
var FourthWall1, FourthWall2, FourthWall3, FourthWall4, FourthWall5, FourthWall6, FourthWall7, FourthWall8;
var FifthWall1, FifthWall2, FifthWall3, FifthWall4, FifthWall5, FifthWall6, FifthWall7, FifthWall8;
var SixthWall1, SixthWall2, SixthWall3, SixthWall4, SixthWall5, SixthWall6, SixthWall7, SixthWall8;
var SeventhWall1, SeventhWall2, SeventhWall3, SeventhWall4, SeventhWall5, SeventhWall6, SeventhWall7, SeventhWall8;
var EigthWall1, EigthWall2, EigthWall3, EigthWall4, EigthWall5, EigthWall6, EigthWall7, EigthWall8;
var GrandWall1, GrandWall2, GrandWall3, GrandWall4, GrandWall5, GrandWall6, GrandWall7, GrandWall8;

var wallGroup;

var door1;

//trial

var trialPlayer;

var trialState;

function preload(){

    //Preload Background Images

    backGround = loadImage("Images/Background.png");
    backGroundStart = loadImage("Images/backgroundStart.png");
    startImage = loadImage("Images/start.png");
    woodenBoardImage = loadImage("Images/boardwithText.png");
    woodenBoardBack = loadImage("Images/Background2.png");

    //Preload Arrows

    nextArrow = loadImage("Images/nextArrow.png");

    //Preload Kit Images

    kit1img = loadImage("Images/Kit1.png");
    kit2img = loadImage("Images/Kit2.png");
    kit3img = loadImage("Images/Kit3.png");

    //Preload Player Images

    playerFrontImg = loadAnimation("Images/PlayerFront.png");
    playerRightImg = loadAnimation("Images/PlayerRight.png");
    playerLeftImg = loadAnimation("Images/PlayerLeft.png");
    playerBackImg = loadAnimation("Images/PlayerBack.png");

    //Preload Images to show selected kits

    kitShowImg = loadImage("Images/BowStandard.png");
    kitShowImg2 = loadImage("Images/Sword.png");
    kitShowImg3 = loadImage("Images/Trident.png");

}

function setup(){

    //Set up firebase

    database = firebase.database();

    //Simplify the display Width and Height

    dHeight = 750;
    dWidth = 1500;
    
    createCanvas(dWidth, dHeight);

    //Create Buttons to move into next page

    button = createSprite(dWidth - 50, dHeight - 50, 50, 50);
    button.addImage("button", nextArrow);
    button.scale = 0.1;

    button2 = createSprite(dWidth -50, dHeight - 200 , 50, 50, 50);
    button2.addImage("button", nextArrow);
    button2.scale = 0.1;
    button2.visible = false;

    //To create the start display

    starting = createSprite(dWidth / 2, dHeight /2);
    starting.addImage("start", startImage);
    starting.scale = 0.65;

    //To create the wooden board with the Goal of the Game

    woodenBoard = createSprite(dWidth/ 2, dHeight/2 + 50);
    woodenBoard.addImage("goal", woodenBoardImage);
    woodenBoard.scale = 0.6;
    
    //To call the game Class and to get the gameState

    game = new Game();
    game.getState();

    //Create Reset Button for Ease of Editing

    reset = createButton('reset');
    reset.position(100, 100);

    //Create Wall Group

    wallGroup = new Group();
    
    //trial2

    

    //trial

    trialPlayer = createSprite(750, 375, 50, 50);

    reset.mousePressed(()=> {

        game.update(0);
        player.updateCount(0);

        database.ref('/').update({
  
          players : null
  
        })

    })
    
}

function draw(){

    background(backGround);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    text(mouseY, 100, 100);
    text(mouseX, 150, 100);

    trialPlayer.collide(wallGroup); 

    if(keyDown("left")){

        trialPlayer.x -= 30;

    }
    if(keyDown("right")){

        trialPlayer.x += 30;

    }
    if(keyDown("up")){

        trialPlayer.y -= 30;

    }
    if(keyDown("down")){

        trialPlayer.y += 30;

    }

    if(trialPlayer.x > 0 && trialPlayer.x < 1500 && trialPlayer.y > 0 && trialPlayer.y < 750){

        camera.x = 750;
        camera.y = 375;

    }

    if(trialPlayer.x > 0 && trialPlayer.x < 1500 && trialPlayer.y > 750 && trialPlayer.y < 1500){

        camera.x = 750;
        camera.y = 375 + 750;

    }

    if(keyDown("a")){

        trialState = 1;
        
    }
    if(keyDown("b")){

        trialState = 2;

    }

    if(trialState === 1){

        trialPlayer.collide(door1);

    }

    starting.visible = false;
    woodenBoard.visible = false;
    
    if(gameState === 0){

        if(page === 0){
    
            //Game Title
    
            textSize(70);
            fill("white");
            strokeWeight(10);
            stroke("black")
            text("Dungeon Escape", dWidth/2 - 250, 100);  
    
            //Visibility of Start
    
            starting.visible = true;
            
            //Change page if button is pressed

            if(mousePressedOver(button)){
                page = 1;
                button.destroy();
                button2.visible = true;
            }
    
        }

    }
    

    if(page === 1){   

        //To show title and show wooden board with goal

        textSize(50);
        fill("white");
        strokeWeight(8);
        stroke("black");
        text("Dungeon Escape", dWidth/2 - 200, 100);  

        woodenBoard.visible = true;

        //Change page is button pressed

        if(mousePressedOver(button2)){

            //To start the game

            page = 2;
            game.start();
            textSize(50);
            fill("white");
            strokeWeight(8);
            stroke("black")
            text("Dungeon Escape", dWidth/2 - 200, 100);   

        }  

    }

    if(page === 2){

        //To allow for player to move his sprite for visual appeal

        backGround = woodenBoardBack;

        if(keyDown("left_arrow")){

            playerSprite.addAnimation("player", playerLeftImg);

        }

        if(keyDown("right_arrow")){

            playerSprite.addAnimation("player", playerRightImg);

        }

        if(keyDown("up_arrow")){

            playerSprite.addAnimation("player", playerBackImg);

        }

        if(keyDown("down_arrow")){

            playerSprite.addAnimation("player", playerFrontImg);

        }

        //To switch gameState if all players joined

        if(playerCount >= 3){

            gameState = 1;
            game.update(1);
            page = 3;

        }
        
    }

    if(page === 3){

        //To start the play phase of the game

        playerSprite.visible = false;
        game.play();
        game.getState();
        
        //If all players join to start the game

        if(allReady === 3 || gameState === 2){

            gameState = 2;
            game.update(2);
            game.gameStart();
            console.log(gameState);
            background(backGroundStart);

        }

    }

    if(gameState === 2){

        

    }
    
    //Draw all sprites

    drawSprites();

}

