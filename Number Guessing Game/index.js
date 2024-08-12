const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while (running) {

    guess = window.prompt(`guess a number between ${minNum}- ${maxNum}`)
    guess = Number(guess);
    if (isNaN(guess)){
        window.alert(`${guess} is not a Number`)
}
    else if(guess < minNum || guess > maxNum){
        window.alert(`Enter a valid Number`)
}
else{
    attempts++
    if (guess < answer) {
        window.alert("too low Try again later")        
    }
    else if (guess > answer){
        window.alert("too high Try again later")
    }
    else{
        window.alert(`CORRECT! the answer was ${answer} it took you ${attempts} attempts `)
        running = false;
    }

}

}