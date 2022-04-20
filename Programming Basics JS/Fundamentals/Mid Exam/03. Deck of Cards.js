function deckOfCards(input) {
  let myDeck = input.shift().split(", ");
  let n = input.shift();

  for (let index = 0; index < n; index++) {
    let currTokens = input[index].split(", ");

    for (let i = 0; i < currTokens.length; i++) {
      let command = currTokens.shift();

      if (command == "Add") {
          let cardName = currTokens.shift();
        if (myDeck.includes(cardName)) {
          console.log("Card is already in the deck");
        } else {
          myDeck.push(cardName);
          console.log("Card successfully added");
        }
      } else if (command == "Insert") {
        let indexToInsert = Number(currTokens.shift());
        let cardToInsert = currTokens.shift();
        if (indexToInsert < 0 || indexToInsert>=myDeck.length) {
          console.log("Index out of range");
        } else {
          if (myDeck.includes(cardToInsert)) {
            console.log("Card is already added");
          } else {
            myDeck.splice(indexToInsert,0,cardToInsert);
            console.log("Card successfully added");
          }
        }
      } else if (command == "Remove") {
        let cardName = currTokens.shift();
        if (myDeck.includes(cardName)) {
          let indexToRemove = myDeck.indexOf(cardName);
          myDeck.splice(indexToRemove, 1);
          console.log("Card successfully removed");
        } else {
          console.log("Card not found");
        }
      } else if (command == "Remove At") {
        let indexToRemove = Number(currTokens.shift());
        if (indexToRemove < 0 || indexToRemove>=myDeck.length) {
          console.log("Index out of range");
        } else {
          //let indexToRemove = myDeck.indexOf(cardName);
          myDeck.splice(indexToRemove, 1);
          console.log("Card successfully removed");
        }
      }
    }
  }

  console.log(myDeck.join(', '));
}

// deckOfCards((["Ace of Diamonds, Queen of Hearts, King of Clubs",
// "3",
// "Add, King of Diamonds",
// "Insert, 2, Jack of Spades",
// "Remove, Ace of Diamonds"])
// );


deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"])