


let timer;


function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelector('#start').addEventListener('click', function () {
  if (!timer) { 
    timer = setInterval(function () {
      const displayColor = document.body.style.backgroundColor = getRandomColor();
      console.log(displayColor)
    }, 1000);
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(timer);
  timer = null;
});

