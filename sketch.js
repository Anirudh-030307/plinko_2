var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var turn = 0;
var particle;
var gameState = "play" ;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height,1200,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 40; j <=width; j=j+50) 
    {

       plinkos.push(new Plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }


    for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 

function draw() {
  background("black");
  //text("x"+mouseX+"y"+mouseY,mouseX,mouseY);
 textSize(20)
  text("Score : "+score,20,30);

 push();
 fill("yellow");
 text("300",20,530);
 text("500",100,530);
 text("500",180,530);
 text("400",260,530);
 text("100",330,530);
 text("200",410,530);
 pop();

  Engine.update(engine);
 ground.display();
 for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
 if (turn >= 5) {
   gameState = "end";
   textSize(50)
   text("GAME OVER",100,250);  
 }

 if (particle != null) {
  particle.display();
  if (particle.body.position.y>490) {
    if (particle.body.position.x<80) {
     score += 300
      particle = null;
      if (turn >= 5) gameState = "end";
    }
  }
}

if (particle != null) {
  particle.display();
  if (particle.body.position.y>490) {
    if (particle.body.position.x<165) {
     score += 500
      particle = null;
      if (turn >= 5) gameState = "end";
    }
  }
}

if (particle != null) {
  particle.display();
  if (particle.body.position.y>490) {
    if (particle.body.position.x<245) {
     score += 500
      particle = null;
      if (turn >= 5) gameState = "end";
    }
  }
}

if (particle != null) {
  particle.display();
  if (particle.body.position.y>490) {
    if (particle.body.position.x<325) {
     score += 400
      particle = null;
      if (turn >= 5) gameState = "end";
    }
  }
}

if (particle != null) {
  particle.display();
  if (particle.body.position.y>490) {
    if (particle.body.position.x<400) {
     score += 100
      particle = null;
      if (turn >= 5) gameState = "end";
    }
  }
}

if (particle != null) {
  particle.display();
  if (particle.body.position.y>490) {
    if (particle.body.position.x<480) {
     score += 200
      particle = null;
      if (turn >= 5) gameState = "end";
    }
  }
}


}

function  mousePressed() {
  if (gameState!=="end" && turn <5 ) {
    turn = turn + 1 ;
    console.log(turn);
    particle=new Particle(mouseX,10,10,10);
  }
}