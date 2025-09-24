const PI = 3.14;
let radius = 3;

let area = PI * radius * radius;

console.log("Area = " + area);

radius = 20;

area = PI * radius * radius;

console.log("New area = " + area);

const one = 1;
const two = '2'

let result = one * two; //implicit type conversion
console.log(result);

result = one + Number(two);
console.log(result);

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
//console.log(student); //does not work, can't access a block variable outside the block

let selectElem = document.getElementById('webdevlist');
let h2 = document.querySelector('h2');
selectElem.addEventListener('change', function(){
    document.querySelector('#html').style.color = 'black';
    document.querySelector('#css').style.color = 'black';
    document.querySelector('#js').style.color = 'black';
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})

const newPara = document.createElement('p');
newPara.innerText = "added text here";

const topics = document.querySelector('#topics');
topics.appendChild(newPara);

const image = document.querySelector('img');
image.setAttribute('src', 'images/html_css_js_logos.jpg');
image.setAttribute('alt', 'HTML CSS JS Logo');

//document.body.className = 'blue';

document.body.style.backgroundColor = 'lightblue';