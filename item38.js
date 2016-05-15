// item 38 “Call Superclass Constructors from Subclass Constructors”

//• Call the superclass constructor explicitly from subclass constructors, passing this as the          explicit receiver.
//• Use Object.create to construct the subclass prototype object to avoid calling the superclass        constructor.
//

'use strict';

function Context(){
    // represents underlying graphics display class
};

Context.prototype.clearRect = function(xPosition, yPosition, width, height){
    
    console.log("clearing the rect starting from this point ("+ xPosition +","+ yPosition +") for the width and height ("+ width +','+height +")");
};

Context.prototype.drawImage= function (image, x, y){
    
    console.log("drawing image "+image+" on "+x+" "+y+" by the underlying context.....");
    
};


function Scene(context, images, width, height){
    this.context = context;
    this.images = images;
    this.width = width;
    this.height = height;
    this.actors = [];
}; 


Scene.prototype.register = function(actor){
    this.actors.push(actor);
};

Scene.prototype.unregister = function(actor){
    var i = this.actors.indexOf(actor);
    if (i >= 0){
        this.actors.splice(i,1);
    }
    
};

Scene.prototype.draw = function (){
    
    this.context.clearRect(0,0,this.width, this.height);
    
    for (var i = 0, n= this.actors.length; i < n ; i++){
        
        this.actors[i].draw();
    }
}; 

function Actor (scene, type, x, y){
    this.x = x;
    this.y = y;
    this.type = type;
    this.scene = scene;
    scene.register(this);
}; 

Actor.prototype.moveTo = function (x,y){
    this.x = x ;
    this.y = y ; 
    this.scene.draw();
};

Actor.prototype.exit = function (){
    
    this.scene.unregister(this);
    this.scene.draw();
    
};

Actor.prototype.draw = function (){
    
    var image = this.scene.images[this.type-1];
    this.scene.context.drawImage(image, this.x, this.y);
    console.log(this);
    console.log(this.width());
    console.log(this.height());
};

Actor.prototype.width = function (){
    return this.scene.images[this.type-1][1];
};

Actor.prototype.height = function (){
    return this.scene.images[this.type-1][2];
};

function Spaceship (scene, x, y){
    Actor.call(this, scene, Spaceship.prototype.type, x, y);
    this.points = 0;
};

Spaceship.prototype = Object.create(Actor.prototype);
Spaceship.prototype.type = 2;

Spaceship.prototype.scorePoint = function() {
    this.points++;
};

Spaceship.prototype.left = function (){
    console.log("Moving left....");
    this.moveTo(Math.max(this.x - 10, 1),this.y);
};

Spaceship.prototype.right = function() {
    console.log("Moving right....");
    var maxWidth = this.scene.width - this.width();
    this.moveTo(Math.min(this.x + 10, maxWidth), this.y);
};

var context1= new Context();
var scene1= new Scene(context1, [["imageType1",10,15],["imageType2",20,25],["imageType3",30,35],["imageType4",40,45]] , 400 , 400);

var actor1 = new Actor(scene1,1, 20, 25);
var spaceship2 = new Spaceship(scene1, 30, 35);

scene1.draw();

spaceship2.left();
spaceship2.right();
