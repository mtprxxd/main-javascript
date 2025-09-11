const random = Math.floor((Math.random() * 100)+1)


const submit = document.querySelector('#subt')
const format = document.querySelector('#form')
const result = document.querySelector('#results')


format.addEventListener('submit',function(e){
    e.preventDefault() 
    
    const userInput = parseInt(document.querySelector('#guessField').value)
    const arr_guess = parseInt(document.querySelector('.guesses').value)

    if(userInput === '' || isNaN(userInput)){
        result.innerHTML = `<span>Please enter a number</span>`
    }else if(userInput === random) {
        result.innerHTML = `<span style = "color: #00FF00; font-size: 16px; ">Congrats! ${userInput} is correct number</span>`
    }else {
        result.innerHTML = `<span style = "color: #FF0000; font-size: 16px;">No! ${userInput} doesn't match any guess</span>`
    }

    const create_array = new Array()
    create_array.forEach(element=>{
        create_array.push(userInput) =element
        create_array.
        

    })
})
    



