const CARDS = require("./Values.json");

const DEFAULT_PROPERTIES = {
  get receivedDate() {
    return new Date();
  },
  get card() {
    const cardType =
      CARDS[0].cardType[Math.floor(Math.random() * CARDS[0].cardType.length)];

    const cardValue =
      CARDS[0].cardValues[
        Math.floor(Math.random() * CARDS[0].cardValues.length)
      ];

    const card = {
      cardType: cardType,
      cardNumber: cardValue.number,
      cardValue: cardValue.value
    };
    return card;
  }
};

class Card {
  constructor({ receivedDate: receivedDate, card: card } = {}) {
    this.receivedDate = receivedDate || DEFAULT_PROPERTIES.receivedDate;
    this.card = card || DEFAULT_PROPERTIES.card;
  }
}

module.exports = Card;
