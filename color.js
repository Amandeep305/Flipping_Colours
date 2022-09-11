let colors = ["blue", "purple", "cyan", "red", "green", "rgba(123, 45, 79)", "rgba(123, 56, 189)", "rgba(213, 216, 19)", "rgba(23, 56, 89)", "#00ff80", "#ff8000"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randNumber = randNumberGenerator();
    document.body.style.backgroundColor = colors[randNumber];
    console.log(colors[randNumber]);
    color.textContent = colors[randNumber];
})

function randNumberGenerator(){
    return(Math.floor(Math.random()*colors.length));
}