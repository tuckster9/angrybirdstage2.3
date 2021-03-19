class chain{
    constructor(bodyA,bodyB){
    var options = {
        bodyA:bodyA, bodyB:bodyB, length: 20, stiffness: 0.09
    } 
    this.chain = Constraint.create(options)  
    World.add(world,this.chain) 
    }
    display(){
        line(this.chain.bodyA.position.x, this.chain.bodyA.postion.y, this.chain.bodyB.postion.x, this.chain.bodyB.position.y)
    }
}



