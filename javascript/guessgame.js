let movie_name='avatar'

let guess=prompt('enter the name')
while(guess!=movie_name && guess!='quit'){
    guess=prompt('try again')
}
if (guess == movie_name) {
    alert("🎉 Correct! You guessed it right!");
} else {
    alert("You quit the game.");
}