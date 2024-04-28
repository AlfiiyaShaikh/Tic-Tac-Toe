let game_info = document.querySelector('.game-info');
let boxes = document.querySelectorAll('.box');
let box = document.querySelectorAll('.boxes');
gameGridValue = ["X", "", "", "", "", "", "", "", ""];
let checkWin;
let turn = 'X';
let winPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

function initGame() {
    turn = 'X'
    game_info.innerText = "Turn of : Player " + turn;


    boxes.forEach(box => {
        box.style.pointerEvents = "auto";
        box.innerText = '';
        box.classList.remove('win')
    })
}

initGame();

// values for boxes
function boxValue() {

    game_info.innerText = "Turn of : Player " + turn;

    boxes.forEach((box, index) => {

        box.addEventListener('click', () => {
            if (box.innerHTML === "") {

                box.innerText = turn;
                gameGridValue[index] = turn;

                if (gameGridValue[index] == 'X') {
                    turn = 'O';

                }
                else {
                    turn = 'X';
                }
                game_info.innerText = "Turn of : Player" + turn;
                winStatus()

            }
        });

    })
}
boxValue()

function winStatus() {
    winPosition.forEach((position) => {
        if ((boxes[position[0]].innerText == 'X') && (boxes[position[1]].innerText == 'X') && (boxes[position[2]].innerText == 'X')) {

            boxes[position[0]].classList.add('win');
            boxes[position[1]].classList.add('win');
            boxes[position[2]].classList.add('win');
            if (turn == 'O') {
                game_info.innerText = "Player X win";
            }

            stopContinuing();
            newGameBtn();

        }
        else if ((boxes[position[0]].innerText == 'O') && (boxes[position[1]].innerText == 'O') && (boxes[position[2]].innerText == 'O')) {

            boxes[position[0]].classList.add('win');
            boxes[position[1]].classList.add('win');
            boxes[position[2]].classList.add('win');
            if (turn == 'X') {
                game_info.innerText = "Player O win";
            }
            stopContinuing();
            newGameBtn();

        }
        else if (!gameGridValue.includes("")) {
            game_info.innerText = "It's a tie!";
            
            stopContinuing();
            newGameBtn();
        }
       
    })
}

function stopContinuing() {
    boxes.forEach(box => {
        box.style.pointerEvents = "none";
    })
}
function newGameBtn() {
    let newGame = document.querySelector('.btn');
    newGame.classList.remove('invisible');

    newGame.addEventListener('click', initGame)
}

