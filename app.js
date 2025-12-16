let textDisplay = document.querySelector(".text");
let button = document.querySelector(".btn");

let countValue = 0;

function add() {
    countValue++;
    textDisplay.innerHTML = countValue;

    if (countValue === 15) {
        countValue = 0;
        button.style.backgroungColour = "yellow";
    } else {
        button.style.backgroungColour = "";
    }
}

button.addEventListener("click", add)