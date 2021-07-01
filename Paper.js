class Paper{
  constructor(){
    var options={
    isStatic:false,
    restetution:0.3,
    frictin:0.5,
    density:1.2
}
this.body =  Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.y = y;
this.x = x;
    World.add(world,this.body);
   
    

    }

 show()
    {
        rectMode(CENTER);
        fill("blue")
        rect(this.body.position.x, this.body.position.y,this.width, this.height);
    }




}