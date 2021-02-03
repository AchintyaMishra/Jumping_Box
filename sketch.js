var canvas;
var music;
var box1,box2,box3,box4,box5,box6;
var ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(750,600);

    //create 4 different surfaces

    box1 = createSprite(700,540,100,20)
    box1.shapeColor = "blue"

    box2 = createSprite(570,540,100,20)
    box2.shapeColor = "yellow"

    box3 = createSprite(440,540,100,20)
    box3.shapeColor = "purple"

    box4 = createSprite(310,540,100,20)
    box4.shapeColor = "green"

    box5 = createSprite(180,540,100,20)
    box5.shapeColor = "indigo"

    box6 = createSprite(50,540,100,20)
    box6.shapeColor = "white"

    ball = createSprite(400,20,20,20)





    //create box sprite and give velocity
    if(keyDown("space"))
    {
     ball.velocityX=-3
     ball.velocityY=2   
    }
}

function draw() {
    background("red");
    //create edgeSprite

    createEdgeSprites();
    

    
    drawSprites()

    //add condition to check if box touching surface and make it box

    
}
