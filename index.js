// Code your solutions in this file


function writeCards(name,event) {
  const thanks_texts = []
  for (let i = 0; i < name.length; i++) {
    thanks_texts[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
  }
  return thanks_texts;
}

let n = 10;
function countDown(n){
    while (n >= 0){
        console.log(n --);
    }
    return (countDown);
}
