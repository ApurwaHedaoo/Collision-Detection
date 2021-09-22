var apurwa
var anushka
var tree , flower , sky , house

function setup() {
  createCanvas(1000,1000);
  apurwa = createSprite(400,400,80,80)
  apurwa.shapeColor="pink"
  anushka = createSprite(200,200,100,100)
  anushka.shapeColor = "cyan"
  tree = createSprite(200,200,100,100)
  tree.shapeColor = "blue"
  flower = createSprite(400,200,100,100)
  flower.shapeColor = "blue"
  sky = createSprite(600,200,100,100)
  sky.shapeColor = "blue"
  house = createSprite(800,200,100,100)
  house.shapeColor = "blue"

}

function draw() {
  background("purple");  
  apurwa.x = World.mouseX
  apurwa.y = World.mouseY
  
   if( obstacle(apurwa,flower)){
    apurwa.shapeColor="yellow"
    flower.shapeColor="yellow"

   }
   else{
    apurwa.shapeColor="pink"
    flower.shapeColor="cyan"
   }
  drawSprites();
}
function obstacle(o1,o2){
  
  if(o1.x-o2.x < o1.width/2+o2.width/2&&
    o2.x-o1.x < o1.width/2+o2.width/2&&
    o1.y-o2.y < o1.height/2+o2.height/2&&
    o2.y-o1.y < o1.height/2+o2.height/2){
      return true
    }
    else{
      return false
    }
}