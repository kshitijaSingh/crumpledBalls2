class Dustbin 
{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:'false'
        }

        this.body = Bodies.rectangle(x,y,width,heigth,angle);
        this.heigth = heigth;
        this.width = width;
        World.add(world,this.body)
}