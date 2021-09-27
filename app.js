let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    nbCard=[0,0,0,0,0,0,0,0,0,0],
    deck = [],
    dump = [];

for(let cardValue = 0 ; cardValue < 40 ; cardValue++){
    let end = false;
    while(!end){
        let randomCard = Math.floor(Math.random()*cards.length);
        if(nbCard[randomCard] < 4){ // pour éviter d'avoir plus de 4 valeurs identiques
            deck.push(randomCard+1); // on rajoute +1 car nbCard+1 (nbCard = 0 à 9)
            nbCard[randomCard]++;
            end = true;
        }
    } 
}
console.log(deck);

// function getImage(valeur){ // associe une valeur à une image
//     let card = "./src/img/";
//     switch(valeur){
//         case 1 : card += "death.png";
//         break;
//         case 2 : card += "life.png";
//         break;
//         case 3 : card += "love.png";
//         break;
//         case 4 : card += "hate.png";
//         break;
//         case 5 : card += "honor.png";
//         break;
//         case 6 : card += "shame.png";
//         break;
//         case 7 : card += "war.png";
//         break;
//         case 8 : card += "peace.png";
//         break;
//         case 9 : card += "peace.png";
//         break;
//         case 10 : card += "peace.png";
//         break;
//         default : console.log("cas non pris en compte")
//     }
//     return card;
// }