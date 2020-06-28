// created player objects with a name and empty deck
let player1 = {
    name: "Player 1",
    deck: [],
  };
  let player2 = {
    name: "Player 2",
    deck: [],
  };
  /*created cards to go into a deck (remember the time when we had 2 extra cards and it fucked us up for literally 4 hours)*/
  let suits = ["Heart", "Club", "Spade", "Diamond"];
  let cards = ["Two", "Three", "Four","Five","Six", "Seven", "Eight", "Nine", "Ten","Jack", "Queen", "King","Ace",];

 /*creating a deck that holds all cards that are supposed to be played (supposed to be 52 of them bitches but we magically got 60 of them hoes(reference above statement))*/
  let deck = [];
  /*array to store the cards that will be compared after they are flipped (seemed simple enough but you see that bitch still empty*/
  //let cardsInPlay ;
  //for loop to push all the cars into the deck (this is where the 60 card error is happening(no it wasnt))*//

  //a small side note - because this gives the value of cards based off of the positioning of the array 'cards' each value is set from 0 - 12 instead of 2-14 ... shouldnt effect how the game works though
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      let card = {
        suits: suits[i],
        rank: cards[j],
        value: j,
      };
      deck.push(card);
    }
  }

  //shuffle the deck (this hoe works) done at the beginning of the game using .onload//
function shuffle(deck) {
    for (
      let j, x, i = deck.length;
      i;
      j = Math.floor(Math.random() * i),
        x = deck[--i],
        deck[i] = deck[j],
        deck[j] = x
    );
    return deck;
  }
  //for loop to hand out the deck(this hoe also works)also done using .onload//


  function splitDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
      if (i < 26) {
        player1.deck.push(deck[i]);
      } else {
        player2.deck.push(deck[i]);
      }
    }
  }
  
// //this is the real bitch... still... because we are using the correct syntax to pull from an array inside an object inside another object (see fruits example) and its still not working....//


// //fruits.citrus[0] == the object orange  
// //player1.deck[0] == the first card in the players deck
// //declaring a variable = to the syntax of said object in the console gives the desired result of isolating the specific object
// // the variable 'orange' is declared HERE and is defined in the global scope
// // the variable 'player1Card' is here and is undefined in the global scope
// // WHEN this works the way to get the cards to compare would be declaring a variable 'cardsInPlay', making this an array and putting the variable (look at the confidence... and now this hoe works too)
// 


// //   function compareCards() {
// //     let cardsInPlay = player1.deck.shift()
// //   }
  var fruits = {
      citrus: [{orange:
    "tasty"}, "Lime", "Lemon"] 
  }
 let orange = fruits.citrus.shift();




number1 = {
  name : "One",
  value : 1,
  array : ["string one"]
}

number2 = {
  name : "Two",
  value : 2,
  array : ["string two"]
}



    //if player 1 card value is higher than the player 2 card value, player  1 wins
    if (player1Card.value > player2Card.value) {
      //player1 keeps their card player2 loses their card and both cards go to the bottom of winning player deck (shuffle?) 
      cardsInPlay.pop();
      player1.deck.push(cardsInPlay);
      //^ this will cause problems because its putting an array inside an array 
      

      // //removes current card from the front of each deck
      // playerHand.shift();
      // compHand.shift();
      // //update card counts and check for a winner
      // updateCount();
      // checkWin();
    }


shuffle(deck); 
splitDeck(deck); 


 let player1Card = player1.deck.shift()

let player2Card = player2.deck.shift()


cardsInPlay = [player1Card, player2Card]

