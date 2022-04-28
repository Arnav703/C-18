class student{

 constructor(name,age,grade){
 
  this.name = name;
  this.age = age;
  this.grade = grade;

 }

 display(){

  console.log(this.name);
  console.log(this.age);
  console.log(this.grade);
 }
}


var s1;

function setup(){

  createCanvas(400,400);
  
  s1 = new student("Arnav",12,8);
  s1.display();
  
}