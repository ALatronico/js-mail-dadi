let message = '';
let playerNumber = Math.ceil(Math.random() * 6);
console.log(playerNumber);
let pcNumber = Math.ceil(Math.random() * 6);
console.log(pcNumber);

if (playerNumber > pcNumber){
  message = `Hai vinto con il numero ${playerNumber}, il pc aveva il numero ${pcNumber}`;
} else if (playerNumber < pcNumber){
  message = `Hai perso con il numero ${playerNumber}, il pc aveva il numero ${pcNumber}`;
} else {
  message = `Pari, entrambi avevate il numero ${playerNumber}`;
}
console.log(message);