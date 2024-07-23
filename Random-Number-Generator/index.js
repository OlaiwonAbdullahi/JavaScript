/*const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * max -min) + min;

console.log(randomNum)*/

const myBtn = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
    randomNum2 = Math.floor(Math.random() * max) + min;
    Label2.textContent = randomNum2;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label3.textContent = randomNum3;
    
}
