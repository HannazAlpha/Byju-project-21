class Ground{
    constructor(x,y,width,height){
        var ground_options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,ground_options)
        World.add(world,this.body)
    }
    display(){
        var p1=this.body.position
        push()
        translate(p1.x,p1.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill('blue')
        rect(0,0,this.width,this.height)
        pop()
    }
}