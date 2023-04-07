let box = document.getElementsByClassName("boxes");
let turn = "X";
let gameOver = false;
Array.from(box).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            isWinning();
            if (!gameOver) {
                document.getElementsByClassName("turnFor")[0].innerText = turn;
            }
        }

    })

})

function changeTurn() {
    return turn === "X" ? "0" : "X";
}
function isWinning() {
    let boxText = document.getElementsByClassName("boxText");
    let winning = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    winning.forEach(element => {
        if (boxText[element[0]].innerText === boxText[element[1]].innerText && boxText[element[2]].innerText === boxText[element[1]].innerText && boxText[element[0]].innerText !== "") {
            document.querySelector(".showWinner").innerText = boxText[element[0]].innerText;
            // console.log(boxText[element[0]].innerText);
            gameOver = true;
            document.querySelector(".hideTurn").style.display ='none';
        }
    });
}