

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").ariaValueMax;
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")
    const values = [];
    const images = [];
    
    for (let i = 0; i < numOfDIce; i++) {
        const value = Math.floor(Math.random() * 6 ) + 1;
        values.push(value);
        images.push(`<img src="Images/${value}.png"></img>`)
        
    }
    diceResult.textContent = `dice: ${values.join(',')}`,;
    diceImages.innerHTML = images.join("");

}