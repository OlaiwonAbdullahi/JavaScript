/*let age = 25;

if (age >= 18) {
    console.log("you're old enough to enter this site");

    
} else {
    console.log("you must be 18+ to enter this site")
}*/

/*let time = 14;

if (time < 12) {
    console.log("good morning")   
} else {
    console.log("good Afternoon")
}

let isStudent = false;

if (isStudent) {
    console.log("you are a student")    
} else {
    console.log("you are not a student")
}*/

const myText = document.getElementById("myText")
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement")
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    
    if (age >= 100) {
        resultElement.textContent =`you're too old to enter this site`   
    }
     else if(age == 0) {
        resultElement.textContent = `you're just born`
    }
    else if(age > 18) {
        resultElement.textContent = `you're old enough to enter this site`
    }
    else if(age < 0) {
        resultElement.textContent = `you're age can't be less than 0`
    }
    else {
        resultElement.textContent = `you must be 18+ to enter this site`
    }
}