let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let NewGameBtn = document.querySelector("#New");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");



let turnO = true;

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO === true) { //Player0
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X"; //playerX
            turnO = true;

        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${ winner }`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for (let pattern of winningPattern) {

        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value == pos2value && pos2value === pos3value) {
                console.log("WINNER", pos1value);
                showWinner(pos1value)
            }
        }
    }
};

NewGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);