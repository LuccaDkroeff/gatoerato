var bgImg;
var cat,catImg2,catImg3,catImg4;
var mouse, mouseImg2,mouseImg3,mouseImg4;


function preload() {
    //carregue as imagens aqui

    bgImg = loadImage("garden.png");

    cat = loadImage("cat1.png");

    mouse = loadImage("mouse1.png");

    catImg2 = loadAnimation("cat2.png", "cat3.png");

    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");

    catImg3 = loadImage ("cat3.png");


}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui

    cat = createSprite (870, 600);
    cat.addAnimation ("gatoSentando", catImg2);
    cat.scale = 0.2;

    mouse = createSprite (50,600);
    mouse.addAnimation ("ratoFeliz", mouseImg2);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("últimaImagemGato", catImg3);
        cat.changeAmimation("últimaImagemGato");
        cat.x = 300;
        cat.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if (keyCode === LEFT_ARROW){
    mouse.addAnimation("ratoProvocando", mouseImg2);
    mouse.changeAnimation("ratoProvocando");
    mouse.frameDelay = 25;

    cat.velocityX = -5

  }


}
