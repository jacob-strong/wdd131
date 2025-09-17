const PI = 3.14;
let radius = 3;

let area = PI * radius * radius;

console.log("Area = " + area);

radius = 20;

area = PI * radius * radius;

console.log("New area = " + area);

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block