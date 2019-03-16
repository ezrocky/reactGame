let button = document.querySelector('button'); 
let input = document.querySelector('input');

let allBlocksArr = document.getElementsByClassName('block');
let randomNum;

button.onclick = function() {
    setTimeout(addYellowBlock, 500);
    button.disabled = true;
}

input.onclick = function() {
    allBlocksArr[randomNum].classList.remove('red');
    allBlocksArr[randomNum].classList.remove('green');
    setTimeout(addYellowBlock, 500);
    input.disabled = true;
}


function addYellowBlock() {
    randomNum = Math.floor(Math.random() * (923 - 0 + 1)) + 0;
    allBlocksArr[randomNum].classList.add('yellow');
    window.timerId = setTimeout(computerPoint, 800)
}


function computerPoint() {
    allBlocksArr[randomNum].classList.remove('yellow');
    allBlocksArr[randomNum].classList.add('red');
    let computerCount = document.getElementById('computer-count');
    computerCount.innerHTML = Number(computerCount.innerHTML) + 1;
    if(Number(computerCount.innerHTML) == 2) {
        youLost();
        return;
    }
        
    input.style.visibility = 'visible';
    input.disabled = false;
}

function playerPoint() {
    allBlocksArr[randomNum].classList.remove('yellow');
    allBlocksArr[randomNum].classList.add('green');
    let playerCount = document.getElementById('player-count');
    playerCount.innerHTML = Number(playerCount.innerHTML) + 1;
    if(Number(playerCount.innerHTML) == 10) {
        youWon();
        return;
    }
    
    input.style.visibility = 'visible';
    input.disabled = false;
}

function youWon() {
    input.disabled = true;
    document.getElementById('okno').innerHTML = 'Поздравляем!! Вы выиграли!!<br><a href="#" class="close">Играть заново</a>'
    document.getElementById('modal').click();
    document.querySelector('.close').addEventListener('click', reLoad)
}

function youLost() {
    input.disabled = true;
    document.getElementById('okno').innerHTML = 'Вы проиграли :(<br><a href="#" class="close">Играть заново</a>'
    document.getElementById('modal').click();
    document.querySelector('.close').addEventListener('click', reLoad)
    
}

function reLoad() {
    location.reload();
}

document.addEventListener('click', function(Event) {
    if(Event.target.classList.contains('yellow')) {
        clearTimeout(window.timerId);
        playerPoint();
    }
}, false);