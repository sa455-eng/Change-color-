let button = document.querySelector("button");

button.addEventListener("click",()=>{
    let h3 = document.querySelector("h3");
    let randomeColor = GenerateRandomeColor();

    h3.innerText = randomeColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = randomeColor;

})

function GenerateRandomeColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
    
}