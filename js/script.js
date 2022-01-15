let scoreBoard = [0,0];
let playerName = '';
const pictures = ['img/sten.png','img/sax.png','img/pase.jpg'];

const userScore = document.querySelector('#user-score');
const computerScore = document.querySelector('#computer-score');
const btnTryAgain = document.querySelector('.footer > button');
const input = document.querySelector('.player-name');

input.addEventListener('keypress', pressEnter);
input.addEventListener('click',e => input.value='');
btnTryAgain.addEventListener('click', e => resetGrid());
btnTryAgain.addEventListener('click', e => input.value = 'enter your name');

function pressEnter(e){
    if(e.key === 'Enter'){
        playerName = input.value;
        input.style.textAlign = 'center';
        input.style.border = 'white solid 0px';
        input.blur();
        resetGrid();
        setGrid();
    }
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
    image.classList.add('computerImage');
    image.style.objectFit = 'cover';

    div.appendChild(image);
    computergrid.appendChild(div);

    console.log();
    
}

function resetGrid() {
    /*set the grid for the player*/
    const usergridDivs = document.querySelectorAll('.player > div');
    const computergridDivs = document.querySelectorAll('.computer > div');
    usergridDivs.forEach(element => {element.remove();});
    computergridDivs.forEach(element => {element.remove();});

    scoreBoard = [0,0];
    userScore.innerText = ``;
    computerScore.innerText = ``;

    
}

function userSelection(userSelection){
    const user = userSelection.target.innerHTML;
    const computer = computerResult();
    const winner = compareResult(user, computer);
    const masterOfSSP = countResult(winner);

    userSelection.target.style.border = 'red solid 3px'
    setcomputerImage(computer);
    alert(winner);
    setcomputerImage('img/computer.png');
    userSelection.target.style.border = 'red solid 0px'

    if(masterOfSSP != ''){alert(masterOfSSP);}

    console.log(userSelection);

    console.log('Winner: ', winner, 'Score: ', scoreBoard);
    
}

function computerResult(){
    const randNr = Math.floor(3*Math.random());
    return pictures[randNr];
}

function compareResult(user,computer){
    let winner = '';
    console.log(playerName,':',user,computer);

    if(user === computer){winner = 'tie';}
    else if(user === 'img/sten.png'){
        if(computer === 'img/sax.png'){winner = playerName;}
        else if(computer === 'img/pase.jpg'){winner = 'computer';}
    }else if(user === 'img/sax.png'){
        if(computer === 'img/pase.jpg'){winner = playerName;}
        else if(computer === 'img/sten.png'){winner = 'computer';}
    }else if(user === 'img/pase.jpg'){
        if(computer === 'img/sten.png'){winner = playerName;}
        else if(computer === 'img/sax.png'){winner = 'computer';}
    }

    return winner;
}

function countResult(winner){
    let masterOfSSP = '';
    scoreBoard[0] += winner===playerName;
    scoreBoard[1] += winner==='computer';
    userScore.innerText = `Score: ${scoreBoard[0]}`;
    computerScore.innerText = `Score: ${scoreBoard[1]}`;

    if(scoreBoard[0]===3){masterOfSSP = `${playerName} is the master of Sten Sax Påse`}
    else if(scoreBoard[1]===3){masterOfSSP = 'Computer is the master of Sten Sax Påse'}

    return masterOfSSP;

}

function setcomputerImage(image){
    const computerImage = document.querySelector('.computerImage');
    computerImage.src = image;
    //console.log(computerImage)

}