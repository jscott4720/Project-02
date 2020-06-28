// created player objects with a name and empty deck
var player1 = {
    name: "Player 1",
    deck: [],
  };
  let player2 = {
    name: "Player 2",
    deck: [],
  };
  /*created cards to go into a deck (remember the time when we had 2 extra cards and it fucked us up for literally 4 hours)*/
  let suits = ["Heart", "Club", "Spade", "Diamond"];
  let cards = [
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

 /*creating a deck that holds all cards that are supposed to be played (supposed to be 52 of them bitches but we magically got 60 of them hoes(reference above statement))*/
  let deck = [];
  /*array to store the cards that will be compared after they are flipped (seemed simple enough but you see that bitch still empty*/
  //let cardsInPlay ;
  //for loop to push all the cars into the deck (this is where the 60 card error is happening)*//
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

  //shuffle the deck (this hoe works)//
function shuffle(deck) {
    for (
      var j, x, i = deck.length;
      i;
      j = Math.floor(Math.random() * i),
        x = deck[--i],
        deck[i] = deck[j],
        deck[j] = x
    );
    return deck;
  }
  //for loop to hand out the deck(this hoe also works)//
 function splitDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
      if (i < 26) {
        player1.deck.push(deck[i]);
      } else {
        player2.deck.push(deck[i]);
      }
    }
  }
  
//this is the real bitch... still... because we are using the correct syntax to pull from an array inside an object inside another object (see fruits example) and its still not working.... maybe the complexty of rh//

//   function compareCards() {
//     let cardsInPlay = player1.deck.shift()
//   }
  var fruits = {
      citrus: [{Orange:
    "tasty"}, "Lime", "Lemon"] 
  }

let orange = fruits.citrus.shift();

 
 let singleCard = player1.deck.shift()

  
  

//   /*function to flip the cards to check the value*/
//   /*use appendChild function to add player1 cards to player2 deck*/
 
// //     //if player 1 card value is higher than the player 2 card value, player  1 wins
// //     if (player1 % 13 > player2 % 13) {
// //       //pushes current cards from each deck to the back of the player's deck
// //       player2.deck.pop();
// //       player1.push();
// //       //removes current card from the front of each deck
// //       playerHand.shift();
// //       compHand.shift();
// //       //update card counts and check for a winner
// //       updateCount();
// //       checkWin();
// //     }

 window.onload = shuffle(deck); splitDeck(deck); 



