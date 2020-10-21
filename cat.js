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
var mickey =new mouse('mickey','pink');
var jerry = new mouse('jerry','orange');
var tom =new cat();
tom.eat(jerry);
tom.eat(mickey);
console.log(tom);

