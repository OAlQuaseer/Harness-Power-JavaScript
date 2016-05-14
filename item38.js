// item 38 “Call Superclass Constructors from Subclass Constructors”

//• Call the superclass constructor explicitly from subclass constructors, passing this as the          explicit receiver.
//• Use Object.create to construct the subclass prototype object to avoid calling the superclass        constructor.
//

'use strict';

function Context(){
    // represents underlying graphics display class
}

Context.prototype.clearRect = function(xPosition, yPosition, width, height){
    
    console.log("clearing the rect starting from this point ("+ xPosition +","+ yPosition +") for the width and height ("+ width +','+height +")");
}


function Scene(context, images, width, height){
    this.context = context;
    this.images = images;
    this.width = width;
    this.height = height;
    this.actors = [];
} 


Scene.prototype.register = function(actor){
    this.actors.push(actor);
}

Scene.prototype.unregister = function(actor){
    var i = this.actors.indexOf(actor);
    if (i >= 0){
        this.actors.splice(i,1);
    }
    
}

Scene.prototype.draw = function (){
    
    this.context.clearRect(0,0,this.width, this.height);
    
    for (var i = 0, n= this.actors.length; i < n ; i++){
        
        //this.actors[i].draw();
        console.log (this.actors[i]);
    }
} 

function Actor (scene, x, y){
    this.x = x;
    this.y = y;
    this.scene = scene;
    scene.register(this);
} 

Actor.prototype.moveTo = function (x,y){
    this.x = x ;
    this.y = y ; 
    this.scene.draw();
}

var context1= new Context();
var scene1= new Scene(context1, ["image1","image2"] , 400 , 400);

scene1.draw();

var actor1 = new Actor(scene1, 20, 25);
console.log(actor1);
console.log(scene1.actors);
actor1.moveTo(30, 35);
console.log(scene1.actors);