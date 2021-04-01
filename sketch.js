let mouse;
let mouseImg, mouseImg2, mouseImg3, mouseImg4;
let cat;
let catImg, catImg2, catImg3, catImg4;
let bg;

function preload() {
    bg = loadImage('images/garden.png');
    mouseImg = loadImage('images/mouse1.png')
    catImg = loadAnimation('images/cat1.png');
    catImg2 = loadAnimation('images/cat3.png');
    catImg3 = loadAnimation('images/cat2.png');
    catImg4 = loadAnimation('images/cat4.png')
    mouseImg3 = loadAnimation('images/mouse4.png');
    mouseImg2 = loadAnimation("images/mouse3.png","images/mouse2.png");

}

function setup(){
    let canvas = createCanvas(1000,600);
    canvas.position(-250,0)
    mouse = createSprite( 200, 500, 40, 100);
    mouse.addAnimation("mouse",mouseImg);
    mouse.scale = 0.15;

    cat = createSprite(600,500, 10 , 10);
    cat.addAnimation("cat",catImg);
    cat.scale = 0.20;
}

function draw() {
    background(bg);
    
    if(cat.x - mouse.x < mouse.width/2 - cat.width/2){
        cat.velocityX = 0;
        cat.x = 300;
        cat.addAnimation("catStop", catImg4);
        cat.changeAnimation("catStop");

        mouse.addAnimation("mouse3", mouseImg3);
        mouse.changeAnimation("mouse3");
    }

    drawSprites();
}


function keyPressed(){
    if (keyDown = LEFT_ARROW){
        cat.velocityX = -4;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouse2", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouse2");
    }
}