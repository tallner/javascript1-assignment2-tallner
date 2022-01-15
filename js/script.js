const pictures = ['img/sten.png','img/sax.png','img/pase.jpg'];

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
    console.log(
        compareResult(
            userSelection.target.innerHTML,
            computerResult()
        )
    );
    
}

function computerResult(){
    const randNr = Math.floor(3*Math.random());
    //console.log('cpu: ', randNr, pictures[randNr]);
    return pictures[randNr];
}

function compareResult(user1,user2){
    let winner = '';
    console.log(user1,user2);

    if(user1 === user2){winner = 'tie';}
    else if(user1 === 'img/sten.png'){
        if(user2 === 'img/sax.png'){winner = 'user1';}
        else if(user2 === 'img/pase.jpg'){winner = 'user2';}
    }else if(user1 === 'img/sax.png'){
        if(user2 === 'img/pase.jpg'){winner = 'user1';}
        else if(user2 === 'img/sten.png'){winner = 'user2';}
    }else if(user1 === 'img/pase.jpg'){
        if(user2 === 'img/sten.png'){winner = 'user1';}
        else if(user2 === 'img/sax.png'){winner = 'user2';}
    }

    return winner;
}