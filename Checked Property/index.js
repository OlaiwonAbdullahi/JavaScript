const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payPalBtn = document.getElementById("payPalBtn");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `you Just Subscribed`;
        
    }
    else{
         subResult.textContent = `you are not a  Subscriber`;
    }
    if (visaBtn.checked) {
        paymentResult.textContent = `you're paying with visa`

    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `you're paying with MasterCard`

    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `you're paying with paypal`

    }
    else{
        paymentResult.textContent = ` you must select a payment type`
    }
}