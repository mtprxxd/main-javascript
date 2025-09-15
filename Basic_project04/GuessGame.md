# Basic Project 4

## Guess The Number

# solution code
```javascript

const random = Math.floor((Math.random() * 100) + 1);

const submit = document.querySelector('#subt');
const format = document.querySelector('#form');
const result = document.querySelector('#results');
const guessesSpan = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');

const guesses = []; 
let attemptsLeft = 10; 

format.addEventListener('submit', function(e) {
    e.preventDefault();

    const userInput = parseInt(document.querySelector('#guessField').value);

    if (userInput === '' || isNaN(userInput)) {
        result.innerHTML = `<span style = "font-size: 16px; color: #FF0000;">Please enter a number</span>`;
        return;
    }
    if (userInput <= 0 || userInput > 100) {
        result.innerHTML = `<span style = "font-size: 16px;">Please enter between 1-100</span>`;
        return;
    }
    

    guesses.push(userInput);
    guessesSpan.textContent = guesses.join(', ');

    attemptsLeft--;
    lastResult.textContent = attemptsLeft;

    if (userInput === random) {
        result.innerHTML = `<span style="color: #00FF00; font-size: 16px;">Congrats! ${userInput} is the correct number 🎉</span>`;
        format.querySelector('#guessField').disabled = true;
        submit.disabled = true;
    } else {
        result.innerHTML = `<span style="color: #FF0000; font-size: 16px;">No! ${userInput} is not correct</span>`;
    }if (attemptsLeft === 0 && userInput !== random) {
        result.innerHTML = `<span style="color: orange; font-size: 16px;">Game Over! The number was ${random}</span>`;
        format.querySelector('#guessField').disabled = true;
        submit.disabled = true;
    }

    
    document.querySelector('#guessField').value = '';
});

    





```