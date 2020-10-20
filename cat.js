function cat(){
    this.stomach=[];
}
function mouse(name,color){
    this.name=name;
    this.color=color;
    this.dead=false;
}
mouse.prototype.die=function(){
    this.dead=true;
}
cat.prototype.eat= function(mouse){
    this.stomach.push(mouse);
    mouse.die();
}
var jerry = new mouse('jerry','orange');
var tom =new cat();
tom.eat(jerry);
console.log(tom);
console.log(jerry);