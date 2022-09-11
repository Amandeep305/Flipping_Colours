hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){  
    let randNumber = "#";
    for(let i=0; i<6; i++){
        randNumber += hex[getRandNumber()];
    }
        document.body.style.backgroundColor = randNumber;
        color.textContent = randNumber;
})

function getRandNumber(){
    return Math.floor(Math.random() * hex.length);
}