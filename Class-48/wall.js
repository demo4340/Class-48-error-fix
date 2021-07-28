function createWalls(){

    fill("white");

    FirstWall1 = createSprite(25, 125 , 50, 250); 
    FirstWall2 = createSprite(25, 625 , 50, 250); 
    FirstWall3 = createSprite(dWidth - 25, 125 , 50, 250); 
    FirstWall4 = createSprite(dWidth - 25, 625 , 50, 250); 

    FirstWall5 = createSprite(250 , 25 , 500, 50); 
    FirstWall6 = createSprite(1250 , 25 , 500, 50); 
    FirstWall7 = createSprite(1250, dHeight - 25, 500, 50);
    FirstWall8 = createSprite(250, dHeight - 25, 500, 50);

    ThirdWall1 = createSprite(25, 125 - 750 , 50, 250); 
    ThirdWall2 = createSprite(25, 625 - 750, 50, 250); 
    ThirdWall3 = createSprite(dWidth - 25, 125 - 750 , 50, 250); 
    ThirdWall4 = createSprite(dWidth - 25, 625 - 750, 50, 250); 

    ThirdWall5 = createSprite(375 , 25 -750, 750, 50); 
    ThirdWall6 = createSprite(1125 , 25 -750, 750, 50); 
    ThirdWall7 = createSprite(1250, dHeight - 25 -750 , 500, 50);
    ThirdWall8 = createSprite(250, dHeight - 25 -750 , 500, 50);     

    FourthWall1 = createSprite(25, 125 + 750 , 50, 250); 
    FourthWall2 = createSprite(25, 625 + 750, 50, 250); 
    FourthWall3 = createSprite(dWidth - 25, 125 + 750 , 50, 250); 
    FourthWall4 = createSprite(dWidth - 25, 625 + 750, 50, 250); 

    FourthWall5 = createSprite(250 , 25 +750, 500, 50); 
    FourthWall6 = createSprite(1250 , 25 +750, 500, 50); 
    FourthWall7 = createSprite(375, dHeight - 25 +750 , 750, 50);
    FourthWall8 = createSprite(1125, dHeight - 25 +750 , 750, 50);   

    FifthWall1 = createSprite(25 + 1500, 125 + 750 , 50, 250); 
    FifthWall2 = createSprite(25 + 1500, 625 + 750, 50, 250); 
    FifthWall3 = createSprite(dWidth - 25 + 1500, 375 + 750 , 50, 750); 

    FifthWall5 = createSprite(250 + 1500 , 25 +750, 500, 50); 
    FifthWall6 = createSprite(1250 + 1500 , 25 +750, 500, 50); 
    FifthWall7 = createSprite(375 + 1500, dHeight - 25 +750 , 750, 50);
    FifthWall8 = createSprite(1125 + 1500, dHeight - 25 +750 , 750, 50);  

    SixthWall1 = createSprite(25 - 1500, 375 + 750 , 50, 750); 
    SixthWall2 = createSprite(25 - 1500, 375 , 50, 750); 
    SixthWall3 = createSprite(dWidth - 25 - 1500, 125 + 750 , 50, 250); 
    SixthWall4 = createSprite(dWidth - 25 - 1500, 625 + 750, 50, 250); 

    SixthWall5 = createSprite(250 - 1500 , 25 +750, 500, 50); 
    SixthWall6 = createSprite(1250 - 1500 , 25 +750, 500, 50); 
    SixthWall7 = createSprite(375 - 1500, dHeight - 25 +750 , 750, 50);
    SixthWall8 = createSprite(1125 - 1500, dHeight - 25 +750 , 750, 50);  

    SeventhWall1 = createSprite(25 - 1500, 125 - 750 , 50, 250); 
    SeventhWall2 = createSprite(25 - 1500, 375 - 750, 50, 750); 
    SeventhWall3 = createSprite(dWidth - 25 - 1500, 125 - 750 , 50, 250); 
    SeventhWall4 = createSprite(dWidth - 25 - 1500, 625 - 750, 50, 250); 

    SeventhWall5 = createSprite(375 - 1500 , 25 -750, 750, 50); 
    SeventhWall6 = createSprite(1125 - 1500 , 25 -750, 750, 50); 
    SeventhWall7 = createSprite(1250 - 1500, dHeight - 25 -750 , 500, 50);
    SeventhWall8 = createSprite(250 - 1500, dHeight - 25 -750 , 500, 50);

    EigthWall1 = createSprite(25 + 1500, 125 - 750 , 50, 250); 
    EigthWall2 = createSprite(25 + 1500, 625 - 750, 50, 250); 
    EigthWall3 = createSprite(dWidth - 25 + 1500, 375 - 750 , 50, 750); 
    //EigthWall4 = createSprite(dWidth - 25 + 1500, 625 - 750, 50, 250); 

    EigthWall5 = createSprite(375 + 1500 , 25 -750, 750, 50); 
    EigthWall6 = createSprite(1125 + 1500 , 25 -750, 750, 50); 
    EigthWall7 = createSprite(1250 + 1500, dHeight - 25 -750 , 500, 50);
    EigthWall8 = createSprite(250 + 1500, dHeight - 25 -750 , 500, 50);

    GrandWall1 = createSprite(25 + 3000, 375 + 750 , 50, 1125); 
    GrandWall2 = createSprite(25 + 3000, 375 - 750 , 50, 1125); 
    GrandWall3 = createSprite(dWidth - 25 + 3000, 375 , 50, 2250);  

    GrandWall5 = createSprite(375 + 3000 , 25 + 1500, 750, 50); 
    GrandWall6 = createSprite(1125 + 3000 , 25 + 1500, 750, 50); 
    GrandWall7 = createSprite(1125 + 3000, dHeight - 25 -1500 , 750, 50);
    GrandWall8 = createSprite(375 + 3000, dHeight - 25 -1500 , 750, 50);

    door1 = createSprite(750, 750, 250, 50);

    wallGroup.add(FirstWall1);
    wallGroup.add(FirstWall2);
    wallGroup.add(FirstWall3);
    wallGroup.add(FirstWall4);
    wallGroup.add(FirstWall5);
    wallGroup.add(FirstWall6);
    wallGroup.add(FirstWall7);
    wallGroup.add(FirstWall8);

    wallGroup.add(ThirdWall1);
    wallGroup.add(ThirdWall2);
    wallGroup.add(ThirdWall3);
    wallGroup.add(ThirdWall4);
    wallGroup.add(ThirdWall5);
    wallGroup.add(ThirdWall6);
    wallGroup.add(ThirdWall7);
    wallGroup.add(ThirdWall8);
    
    wallGroup.add(FourthWall1);
    wallGroup.add(FourthWall2);
    wallGroup.add(FourthWall3);
    wallGroup.add(FourthWall4);
    wallGroup.add(FourthWall5);
    wallGroup.add(FourthWall6);
    wallGroup.add(FourthWall7);
    wallGroup.add(FourthWall8);

    wallGroup.add(FifthWall1);
    wallGroup.add(FifthWall2);
    wallGroup.add(FifthWall3);
    wallGroup.add(FifthWall5);
    wallGroup.add(FifthWall6);
    wallGroup.add(FifthWall7);
    wallGroup.add(FifthWall8);

    wallGroup.add(SixthWall1);
    wallGroup.add(SixthWall2);
    wallGroup.add(SixthWall3);
    wallGroup.add(SixthWall4);
    wallGroup.add(SixthWall5);
    wallGroup.add(SixthWall6);
    wallGroup.add(SixthWall7);
    wallGroup.add(SixthWall8);

    wallGroup.add(SeventhWall1);
    wallGroup.add(SeventhWall2);
    wallGroup.add(SeventhWall3);
    wallGroup.add(SeventhWall4);
    wallGroup.add(SeventhWall5);
    wallGroup.add(SeventhWall6);
    wallGroup.add(SeventhWall7);
    wallGroup.add(SeventhWall8);

    wallGroup.add(EigthWall1);
    wallGroup.add(EigthWall2);
    wallGroup.add(EigthWall3);
    wallGroup.add(EigthWall5);
    wallGroup.add(EigthWall6);
    wallGroup.add(EigthWall7);
    wallGroup.add(EigthWall8);

    wallGroup.setLifetimeEach(1);

  }