const box = document.querySelectorAll('.class')
const body = document.querySelector('body')
const container = document.querySelector('.app')
box.forEach(function (boxes) {
    console.log(boxes)
    boxes.addEventListener('click',function (e) {
        console.log(e)
        console.log(e.target)
        // if (e.target.id === "blue") {
        //     body.style.backgroundColor = 'blue'
        // }
        // if (e.target.id === "blue") {
        //     container.style.backgroundColor = 'yellow'
        // }
        
        // if (e.target.id === "green") {
        //     body.style.backgroundColor = 'green'
        // }
        // if (e.target.id === "green") {
        //     container.style.backgroundColor = 'red'
        // }
        // if (e.target.id === "red") {
        //     body.style.backgroundColor = 'red'
        // }
        // if (e.target.id === "red") {
        //     container.style.backgroundColor = 'green'
        // }
        // if (e.target.id === "yellow") {
        //     body.style.backgroundColor = 'yellow'
        // }
        // if (e.target.id === "yellow") {
        //     container.style.backgroundColor = 'blue-'
        // }
        //  use of switch statement
         const color = e.target.id  
         switch (color) {
            case "blue":
                body.style.backgroundColor = "blue"
                container.style.backgroundColor = "yellow"
                break

            case "green":
                body.style.backgroundColor = "green"
                container.style.backgroundColor = "red"
                break

            case "red":
                body.style.backgroundColor = "red"
                container.style.backgroundColor = "green"
                break

            case "yellow":
                body.style.backgroundColor = "yellow"
                container.style.backgroundColor = "blue"
                break

            default:
                console.log("Match nhi hua..lol")
         }
    })
    
})
