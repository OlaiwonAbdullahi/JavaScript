//let pi = 3.14159;
/*const PI = 3.1459;
let radius;
let circumference;


radius = window.prompt('Enter the radius');
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference)*/

//let pi = 3.14159;
const PI = 3.1459;
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = (`The circumfrence of the circle is ${circumference}cm`)
}