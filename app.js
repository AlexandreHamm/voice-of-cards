// CARD DECKS
const suits = ['Heart', 'Club', 'Diamond', 'Spades'],
    values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    eventCard = ['Dud','Dud','Dud','Dud','Passe','Passe','Passe','Passe','Subtilisation','Subtilisation','Bombe','Tirage','Tirage','Tirage','Tirage','Attaque','Recharge', 'Depouillement'];

// PLAYERS
let player = 1;

// ARRAY
let deck = [],

    handP1 = [],
    buffsP1 = [],
    debuffsP1 = [],

    handP2 = [],
    buffsP2 = [],
    debuffsP2 = [],

    handP3 = [],
    buffsP3 = [],
    debuffsP3 = [],

    handP4 = [],
    buffsP4 = [],
    debuffsP4 = [],

    pot = [],
    playersShuffle = ['player1', 'player2', 'player3', 'player4'],
    dump = [];

// VARIABLES
let nth = 1,
    rCount = 0,
    reverse = 0,
    skip = 0,
    e,
    x;

// CREATE DECK
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// SHUFFLE DECK
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
console.log(deck);

// SHUFFLE EVENT DECK
for (let i = eventCard.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = eventCard[i];
    eventCard[i] = eventCard[j];
    eventCard[j] = temp;
}

// SHUFFLE PLAYERS
for (let i = playersShuffle.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * 4);
    let temp = playersShuffle[i];
    playersShuffle[i] = playersShuffle[j];
    playersShuffle[j] = temp;
}

document.querySelector(".board__remain--counter").innerHTML = deck.length;

// GET CARDS VALUES & SUITS

function cardValues(){
    if(e[e.length-1].Value == '1'){
        document.querySelector(x).innerHTML = 'Ace of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '2'){
        document.querySelector(x).innerHTML = '2 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '3'){
        document.querySelector(x).innerHTML = '3 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '4'){
        document.querySelector(x).innerHTML = '4 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '5'){
        document.querySelector(x).innerHTML = '5 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '6'){
        document.querySelector(x).innerHTML = '6 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '7'){
        document.querySelector(x).innerHTML = '7 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '8'){
        document.querySelector(x).innerHTML = '8 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '9'){
        document.querySelector(x).innerHTML = '9 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
    else if(e[e.length-1].Value == '10'){
        document.querySelector(x).innerHTML = '10 of ';
        if(e[e.length-1].Suit == 'Heart'){
            document.querySelector(x).innerHTML += 'Heart';
        }else if(e[e.length-1].Suit == 'Club'){
            document.querySelector(x).innerHTML += 'Club'
        }else if(e[e.length-1].Suit == 'Diamond'){
            document.querySelector(x).innerHTML += 'Diamond'
        }else{
            document.querySelector(x).innerHTML += 'Spades'
        }
    }
}

// PHASE 1: CHOOSING FIRST PLAYER
function findPlayer(){
    if(playersShuffle[0] == 'player1'){
        player = 1;
        setTimeout(function(){
            document.querySelector('.board__players').style.transform = 'translateX(0)';
            console.log('Player 1');
        }, 300);
    }else if(playersShuffle[0] == 'player2'){
        player = 2;
        setTimeout(function(){
            document.querySelector('.board__players').style.transform = 'translateX(-25%)';
            console.log('Player 2');
        }, 300);
    }else if(playersShuffle[0] == 'player3'){
        player = 3;
        setTimeout(function(){
            document.querySelector('.board__players').style.transform = 'translateX(-50%)';
            console.log('Player 3');
        }, 300);
    }else{
        player = 4;
        setTimeout(function(){
            document.querySelector('.board__players').style.transform = 'translateX(-75%)';
            console.log('Player 4');
        }, 300);
    }
}

// RULES BTN

function rules(){
    if(rCount == 0){
        document.querySelector('.board__infoCard--modal').innerHTML = 'Règles';
        document.querySelector('.leftBtn').style.filter = 'brightness(50%)';
        document.querySelector('.leftBtn').addEventListener('mouseover', function(){
            this.style.filter = 'brightness(100%)';
        });
        document.querySelector('.leftBtn').addEventListener('mouseleave', function(){
            this.style.filter = 'brightness(50%)';
        });
        rCount++;
    }else{
        document.querySelector('.board__infoCard--modal').innerHTML = 'Pour commencer, cliquer sur "Commencer".';
        document.querySelector('.leftBtn').style.filter = 'brightness(100%)';
        document.querySelector('.leftBtn').addEventListener('mouseleave', function(){
            this.style.filter = 'brightness(100%)';
        });
        rCount=0;
    }
}

// GLOBAL VIEW

function globalView(){

    // CHANGE POT POSITION

    let root = document.documentElement;

    root.style.setProperty('--beforeDisplay', 'none'); //targets CSS variable to change .board__pot--area::before display
    document.querySelector('.board__remain').style.display = 'none';
    document.querySelector('.board__pot').style.width = '65%';
    document.querySelector('.board__pot').style.height = '30%';
    document.querySelector('.board__pot--deck').style.display = 'none';
    document.querySelector('.board__pot--eventCard').style.display = 'none';
    document.querySelector('.board__pot--area').style.top = '115px';
    document.querySelector('.board__pot--area').style.height = '95%';
    document.querySelector('.board__pot--area').style.margin = '0';

    // CHANGE PLAYER AREAS POSITION

    document.querySelector('.board__players').style.width = '100%';
    document.querySelector('.board__players').style.height = '70%';
    document.querySelector('.board__players').style.transform = 'translate(0)';

    document.querySelector('.board__player1').style.position = 'absolute';
    document.querySelector('.board__player1').style.left = '0';
    document.querySelector('.board__player1').style.top = '10%';
    document.querySelector('.board__player1').style.height = '40%';
    document.querySelector('.board__player1').style.width = 'calc(50% - 10px)';
    document.querySelector('.board__player1').style.margin = '0 10px 0 0';
    document.querySelector('.board__player1--hand').style.width = '18%';
    document.querySelector('.board__player1>.board__player--avatar').style.width = '18%';
    document.querySelector('.board__player1>.board__player--area').style.width = '60%';

    document.querySelector('.board__player2').style.position = 'absolute';
    document.querySelector('.board__player2').style.right = '0';
    document.querySelector('.board__player2').style.top = '10%';
    document.querySelector('.board__player2').style.height = '40%';
    document.querySelector('.board__player2').style.width = 'calc(50% - 10px)';
    document.querySelector('.board__player2').style.margin = '0';
    document.querySelector('.board__player2--hand').style.width = '18%';
    document.querySelector('.board__player2>.board__player--avatar').style.width = '18%';
    document.querySelector('.board__player2>.board__player--area').style.width = '60%';

    document.querySelector('.board__player3').style.position = 'absolute';
    document.querySelector('.board__player3').style.left = '0';
    document.querySelector('.board__player3').style.bottom = '5%';
    document.querySelector('.board__player3').style.height = '40%';
    document.querySelector('.board__player3').style.width = 'calc(50% - 10px)';
    document.querySelector('.board__player3').style.margin = '10px 10px 0 0';
    document.querySelector('.board__player3--hand').style.width = '18%';
    document.querySelector('.board__player3>.board__player--avatar').style.width = '18%';
    document.querySelector('.board__player3>.board__player--area').style.width = '60%';

    document.querySelector('.board__player4').style.position = 'absolute';
    document.querySelector('.board__player4').style.right = '0';
    document.querySelector('.board__player4').style.bottom = '5%';
    document.querySelector('.board__player4').style.height = '40%';
    document.querySelector('.board__player4').style.width = 'calc(50% - 10px)';
    document.querySelector('.board__player4').style.margin = '10px 0 0 0';
    document.querySelector('.board__player4--hand').style.width = '18%';
    document.querySelector('.board__player4>.board__player--avatar').style.width = '18%';
    document.querySelector('.board__player4>.board__player--area').style.width = '60%';
}

// EVENTS

function events(){
    if(eventCard.pop() == 'Dud'){
        document.querySelector('.board__eventCard--modal').innerHTML = 'Dud';
    }else if(eventCard.pop() == 'Passe'){
            skip = 1;
    }else if(eventCard.pop() == 'Subtilisation'){
        console.log('Subtilisation');
    }else if(eventCard.pop() == 'Reverse'){
        if(reverse == 0){
            reverse++
        }else{
            reverse = 0;
        }
    }else if(eventCard.pop() == 'Bombe'){
        console.log('Bombe')
        if(player == 1){
            if(reverse == 0){
                player2();
            }else{
                player4();
            }
            return;
        }else if(player == 2){
            if(reverse == 0){
                player3();
            }else{
                player1();
            }
            return;
        }else if(player == 3){
            if(reverse == 0){
                player4();
            }else{
                player2();
            }
            return;
        }else{
            if(reverse == 0){
                player1();
            }else{
                player3();
            }
            return;
        }
    }else if(eventCard.pop() == 'Tirage'){
        console.log('Tirage');
    }else if(eventCard.pop() == 'Attaque'){
        console.log('Attaque');
    }else if(eventCard.pop() == 'Recharge de cartes'){
        console.log('Recharge de cartes');
    }else if(eventCard.pop() == 'Depouillement'){
        console.log('Depouillement');
    }else{
        console.log('else');
    }
}

// GAME

function game(){

    document.querySelector('.board__eventCard').style.display = 'block';
    document.querySelector('.yesBtn').addEventListener('click', function(){
        setTimeout(function(){
            events();
        },300);
    });
    document.querySelector('.noBtn').addEventListener('click', function(){
        document.querySelector('.board__eventCard').style.display = 'none';
        return;
    });
}

// PLAYERS TURNS
function player1(){
    if(skip == 0){
        player = 1;
    game();
        if(reverse == 0){
            // player2();
        }else{
            // player4();
        }
    }else{
        skip = 0;
        if(reverse == 0){
            // player2();
        }else{
            // player4();
        }
    }
    
    
}
function player2(){
    if(skip == 0){
        player = 2;
        game();
        if(reverse == 0){
            // player3();
        }else{
            // player1();
        }
    }else{
        skip = 0;
        if(reverse == 0){
            // player3();
        }else{
            // player1();
        }
    }
}
function player3(){
    if(skip == 0){
        player = 3;
        game();
        if(reverse == 0){
            // player4();
        }else{
            // player2();
        }
    }else{
        skip = 0;
        if(reverse == 0){
            // player4();
        }else{
            // player2();
        }
    }
}
function player4(){
    if(skip == 0){
        player = 4;
        game();
        if(reverse == 0){
            // player1();
        }else{
            // player3();
        } 
    }else{
        skip = 0;
        if(reverse == 0){
            // player1();
        }else{
            // player3();
        }
    }    
}

// START GAME

function start(){
    document.querySelector('.leftBtn').style.filter = 'brightness(100%)';
    document.querySelector('.board__start').style.display = 'none';
    document.querySelector('.board__infoCard').style.display = 'none';

    // DRAW CARD TO EVERYONE
    setTimeout(function(){
        e = handP1;
        x = '.board__player1--hand>.cardHand1';
        handP1.push(deck.pop());
        cardValues();
        setTimeout(function(){
            document.querySelector('.board__players').style.transform = 'translateX(-25%)';
        }, 300);
        setTimeout(function(){
            e = handP2;
            x = '.board__player2--hand>.cardHand1';
            handP2.push(deck.pop());
            cardValues();
            setTimeout(function(){
                document.querySelector('.board__players').style.transform = 'translateX(-50%)';
            }, 300);
            setTimeout(function(){
                e = handP3;
                x = '.board__player3--hand>.cardHand1';
                handP3.push(deck.pop());
                cardValues();
                setTimeout(function(){
                    document.querySelector('.board__players').style.transform = 'translateX(-75%)';
                }, 300);
                setTimeout(function(){
                    e = handP4;
                    x = '.board__player4--hand>.cardHand1';
                    handP4.push(deck.pop());
                    cardValues();
                    setTimeout(function(){
                        document.querySelector('.board__players').style.transform = 'translateX(0)';
                    }, 300);
                    setTimeout(function(){
                        findPlayer();
                        setTimeout(function(){
                            play();
                        }, 3000);
                    }, 3000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 2000);

    // let startCard = setTimeout(function(){
    //     // document.addEventListener('click', function(){
    //     //     alert('Hello');
    //     //     return;
    //     // });
    // }, 300);
}

function play(){
    if(playersShuffle[0] == 'player1'){
        player1();
    }else if(playersShuffle[0] == 'player2'){
        player2();
    }else if(playersShuffle[0] == 'player3'){
        player3();
    }else{
        player4();
    }
}

// DROP CARDS TO YARD

function drawCard(){
    if(document.querySelector('.card1').innerHTML !== "" && document.querySelector('.card2').innerHTML !== "" && document.querySelector('.card3').innerHTML !== "" && document.querySelector('.card4').innerHTML !== "" && document.querySelector('.card5').innerHTML !== "" && document.querySelector('.card6').innerHTML !== "" && document.querySelector('.card7').innerHTML !== ""){
        if(document.querySelector('.board__player1--hand>.cardHand1').innerHTML !== "" && document.querySelector('.board__player1--hand>.cardHand2').innerHTML !== "" && document.querySelector('.board__player1--hand>.cardHand3').innerHTML !== ""){
            return;
        }else{
            e = handP1;
            handP1.push(deck.pop());
            document.querySelector(".board__remain--counter").innerHTML = deck.length;
            if(document.querySelector('.board__player1--hand>.cardHand'+String(nth)).innerHTML === ""){
                x = '.board__player1--hand>.cardHand'+String(nth);
                cardValues();
                nth = 1;
            }else{
                let cardContent = setInterval(function(){
                    if(document.querySelector('.board__player1--hand>.cardHand'+String(nth)).innerHTML === ""){
                        x = '.board__player1--hand>.cardHand'+String(nth);
                        cardValues();
                        nth = 1;
                        clearInterval(cardContent);
                    }else{
                        nth++;
                    }
                })
            }
        }
        return;
    }else{
        e = pot;
        pot.push(deck.pop());
        document.querySelector(".board__remain--counter").innerHTML = deck.length;
        // console.log(pot);
        if(document.querySelector('.card'+String(nth)).innerHTML === ""){
            x = '.card'+String(nth);
            cardValues();
            nth = 1;
        }else{
            let cardContent = setInterval(function(){
                if(document.querySelector('.card'+String(nth)).innerHTML === ""){
                    x = '.card'+String(nth);
                    cardValues();
                    nth = 1;
                    clearInterval(cardContent);
                }else{
                    nth++;
                }
            })
        }
    }
}

// FIN DU GAME


// let test = setInterval(function(){
//     dump.push(deck.pop());
//     document.querySelector(".board__remain--counter").innerHTML = deck.length;
//     // console.log(dump);
//     // console.log(deck);
//     if(deck.length == 0){
//         clearInterval(test);
//         // document.querySelector(".board").innerHTML = 'The End';
//         setTimeout(function(){
//             alert('The End');
//         }, 3000);
//     }
// }, 3000);