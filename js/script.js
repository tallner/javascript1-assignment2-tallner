const pictures = ['img/sten.png','img/sax.png','img/pase.jpg'];
const userScore = document.querySelector('#user-score');
const computerScore = document.querySelector('#computer-score');
let scoreBoard = [0,0];

const playerName = document.querySelector('.player-name');
playerName.addEventListener('keypress', pressEnter);
playerName.addEventListener('click',e => playerName.value='');


function pressEnter(e){
    if(e.key === 'Enter'){
        playerName.style.textAlign = 'center';
        playerName.style.border = 'white solid 0px';
        playerName.blur();
    }
}

const btnTryAgain = document.querySelector('.footer > button');
btnTryAgain.addEventListener('click', tryAgain);
function tryAgain(e){
    //reset everyting to default
    playerName.value = 'enter your name';
    setGrid();
}

function setGrid() {
    /*set the grid for the player*/
    const usergrid = document.querySelector('.player');
    const computergrid = document.querySelector('.computer');

    usergrid.style.gridTemplateColumns = "auto auto auto";
    usergrid.style.gridTemplateRows = "auto";
    computergrid.style.gridTemplateColumns = "33% 33% 33%";
    computergrid.style.gridTemplateRows = "auto";

    //draw the user grid
    for(let i=0;i<3;i++){
       
        const div = document.createElement("div");
        div.style.border = '1px solid black';
        div.style.display = 'flex';
        
        const image = document.createElement('img');
        image.src = pictures[i];
        image.innerText = pictures[i];
        image.style.objectFit = 'cover';
        image.addEventListener('click',userSelection);

        div.appendChild(image);
        usergrid.appendChild(div);
    }

    //draw the computer grid
    
        const div = document.createElement("div");
        div.style.border = '1px solid black';
        div.style.display = 'flex';
        
        const image = document.createElement('img');
        image.src = 'img/computer.png';
        image.style.objectFit = 'cover';

        div.appendChild(image);
        computergrid.appendChild(div);

        console.log();
    
}

function userSelection(userSelection){
    const user = userSelection.target.innerHTML;
    const computer = computerResult();
    const winner = compareResult(user, computer);
    countResult(winner);

    console.log('Winner: ', winner, 'Score: ', scoreBoard);
    
}

function computerResult(){
    const randNr = Math.floor(3*Math.random());
    return pictures[randNr];
}

function compareResult(user,computer){
    let winner = '';
    console.log(user,computer);

    if(user === computer){winner = 'tie';}
    else if(user === 'img/sten.png'){
        if(computer === 'img/sax.png'){winner = 'user';}
        else if(computer === 'img/pase.jpg'){winner = 'computer';}
    }else if(user === 'img/sax.png'){
        if(computer === 'img/pase.jpg'){winner = 'user';}
        else if(computer === 'img/sten.png'){winner = 'computer';}
    }else if(user === 'img/pase.jpg'){
        if(computer === 'img/sten.png'){winner = 'user';}
        else if(computer === 'img/sax.png'){winner = 'computer';}
    }

    return winner;
}

function countResult(winner){
    scoreBoard[0] += winner==='user';
    scoreBoard[1] += winner==='computer';
    userScore.innerText = `Score: ${scoreBoard[0]}`;
    computerScore.innerText = `Score: ${scoreBoard[1]}`;


    console.log(scoreBoard);


}