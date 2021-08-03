const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var drops = [];
var maxDrops = 100;

var thunderImage1, thunderImage2, thunderImage3, thunderImage4;

var thunder;

function preload(){
    thunderImage1 = loadImage("images/thunderbolt/1.png");
    thunderImage2 = loadImage("images/thunderbolt/2.png");
    thunderImage3 = loadImage("images/thunderbolt/3.png");
    thunderImage4 = loadImage("images/thunderbolt/4.png");


}

function setup(){
   createCanvas(500,900)
   
   engine = Engine.create();
   world = engine.world;

    if (frameCount % 150 === 0){
        for (let i = 0; i < maxDrops; i++) {
            drops.push(new Drop(random(0, 500), random(0, 400)));
        }
    } 

    umbrella = new Umbrella(200, 705);
     
}

function draw(){
    Engine.update(engine);
    background(10);

    var rand = Math.round(1, 4);

    if (frameCount % 80 === 0){
        
        var thunderCreatedAt = frameCount;
        
        thunder = createSprite(random(10, 375), random(0,20));
        
        switch(rand) {
            case 1: thunder.addImage("Thunder 1", thunderImage1);
            break;

            case 2: thunder.addImage("Thunder 2", thunderImage2);
            break;

            case 3: thunder.addImage("Thunder 3", thunderImage3);
            break;

            case 4: thunder.addImage("Thunder 4", thunderImage4);
            break;
        }

        thunder.scale = 0.4;
    }

    if (thunderCreatedAt + 15 === frameCount ){
        thunder.destroy();
     }

     for (let i = 0; i < maxDrops; i++) {
        drops[i].display();
        drops[i].updateY();
    }
    
    umbrella.display();

    drawSprites();
}   

