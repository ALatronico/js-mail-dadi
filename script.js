const emailList = ['antoniolatronico@gmail.com', 'aveomaria@gmail.com', 'santopadre@libero.it'];

let message = '';
let flag = false;
let enterEmail = prompt('Inserisci qui la tua Email');
let i = 0;

while (!flag){

  if(enterEmail === emailList[i]){
    flag = true;
    message = `l'indirizzo ${enterEmail} è presente nelle mail validate`;
  } else {
    i++;
  }
  if(i === emailList.length){
    message = `l'indirizzo ${enterEmail} non è presente nelle mail validate`;
    flag = true;
  }

}
console.log(message);