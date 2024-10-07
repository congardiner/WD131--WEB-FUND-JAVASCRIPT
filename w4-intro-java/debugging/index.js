const helloElement = document.getElementById('hello')
helloElement.innerText = 'Hello World';

const PI = 3.14;
const radius = 3;
let area = 0;
area = radius * radius * PI;
console.log("Area2;", area)

function CircleArea(radius) {
    const area = radius * PI;
    return area;
};

area = CircleArea(3);
console.log(area);
area = CircleArea(4);
console.log("Area2", area);