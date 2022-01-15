//location.reload()

const playerName = document.querySelector('.player-name');
playerName.addEventListener('keypress', pressEnter);
playerName.addEventListener('click',e => playerName.value='');
playerName.

playerName.addEventListener('change', function () {

    // if(!playerName.value){
    //     playerName.value='add name';
    //     console.log('name empty: ', playerName.value);
    // }

    console.log('value is changed to: ', playerName.value);

  });

function pressEnter(e){
    if(e.key === 'Enter'){
        //playerName.value = 'hej';
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
}
