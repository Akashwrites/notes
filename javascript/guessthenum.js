const val=Number(prompt('enter the num'));
const ans = Math.floor(Math.random() * val) + 1;

while(true){
    let input = prompt('Guess the number (type "quit" to exit):');
    
    if(check=='quit'){
        console.log('u lost');
        break;
    }
    let check=Number(input);
    if(check==ans){
        console.log(' u guessed it right');
        break;
    }
    else if(check>ans){
        alert('its high, guess low');

    }
    else if(check<ans){
        alert('the value is low, guess high');
    }
    
    
}