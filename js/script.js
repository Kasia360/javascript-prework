let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);


let argComputerMove = getMoveName(randomNumber);

function getMoveName(randomNumber, playerInput){
   if(randomNumber == 1){
    return 'kamień';
 } if(randomNumber == 2){
    return 'papier';
 } if(randomNumber == 3){
    return 'nożyce';
 }

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else if (randomNumber == 3){
  computerMove = 'nożyce';
} */

console.log('wybrana opcja przez komputer to: ' + argComputerMove);

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = 'nieznany ruch';

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';
} else if (playerInput == '3'){
  playerMove = 'nożyce';
} */


console.log('Wybrana wartość to: ' + argPlayerMove);

printMessage('Twój ruch to: ' + argPlayerMove);


function displayResult(argComputerMove, argPlayerMove){
if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
  printMessage('Remis!');
} else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
  printMessage('Remis!');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
  printMessage('Remis!');
} else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
  printMessage('Nieznany ruch, spróbuj jeszcze raz!');
} else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
  printMessage('Nieznany ruch, spróbuj jeszcze raz!');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
  printMessage('Nieznany ruch, spróbuj jeszcze raz!');
} else{printMessage`Przegrałeś! Spróbuj ponownie!`} 
}
