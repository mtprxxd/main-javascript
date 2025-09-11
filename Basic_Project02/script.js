const form = document.querySelector('form');


form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');
    const orange = document.querySelector('#orange') 
    const green = document.querySelector('#green') 
    const red = document.querySelector('#red') 
    
    if(height === ''|| height < 0 || isNaN(height)){
        result.innerHTML = `<span>please enter the valid height ${height}</span>`
    } else if(weight === ''|| weight < 0 || isNaN(weight)){
        result.innerHTML = `<span>please enter the valid weight${weight}</span>`
        // alert("Numbers Required only")
    } else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        result.innerHTML = `<span>Calculated BMI ${bmi}</span>`
        result.style.color = 'blue'
        result.style.fontSize = '20px'
        if (bmi < 18.5) {
            orange.style.backgroundColor = "yellow"
        }else if(bmi >=18.5 && bmi <=24.9 ){
            green.style.backgroundColor = "yellow"
        }else{
            red.style.backgroundColor = "yellow"
        }
    }
    
    document.querySelector('#height').value = ''
    document.querySelector('#weight').value = ''
    

})
