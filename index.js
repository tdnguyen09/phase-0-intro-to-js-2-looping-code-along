// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
function wrapGrifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log (`Wrap ${gifts[i]} and added a bow!`)
    }
    return gifts;
}
wrapGrifts(gifts);


function writeCards(names, events){
    const messages =[];
    for (let i = 0; i < names.length; i ++){
       const message = `Thank you, ${names[i]}, for the wonderful ${events} gift!`
       messages.push(message);
    }
    return messages;
}

function countDown(number){
 let i = number;
 while (i >= 0 ){
    console.log(i);
    i--;
 }
}