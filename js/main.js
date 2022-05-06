//Template Name: Interactive Rating
//Author Name : Maedeh Alizadeh

const subButton = document.querySelector('.submit-button button');
const rateState = document.querySelector('.rating-state');
const thanksState = document.querySelector('.thanks-state');
const userRate = document.querySelector('.user-rate');
const alarmMsg = document.querySelector('.alarm-msg');
const numRate = document.querySelectorAll('.rate-num');//Gets all the rate buttons and creates an array
let rate = ''; // for value of rate

numRate.forEach( item => { 
        item.addEventListener('click' , getValue);
    }); // Creates a loop on numRate and an event occurs when each item is clicked
    
subButton.addEventListener('click' , thanksForm);


function getValue(event){
    rate = event.target.value;
} // Gets value of rate buttons
function thanksForm(event){
    event.preventDefault(); //Avoid default events
    if (rate) {
        rateState.classList.add('remove');
        thanksState.style.display = 'block';
        userRate.innerText = `You selected ${rate} out of 5`;
    }
    else {
        alarmMsg.innerText = "First rate, please!";
    }
}



