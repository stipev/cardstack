const Card = require("./card.js");
const { SECONDS, REFRESH_RATE } = require("./config.js");

const REFRESH_TIME = SECONDS * REFRESH_RATE;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
  }
  getCard() {
    if (this.expiration < Date.now())
      throw new Error(`This generation expired on ${this.expiration}`);

    return new Card();
  }
  calculateExpiration() {
    const expirationPeriod = Math.random() * (REFRESH_TIME / 2);
    const msRandomExpirationTime =
      Math.random() > 0.5
        ? REFRESH_TIME + expirationPeriod
        : REFRESH_TIME - expirationPeriod;
    return new Date(Date.now() + msRandomExpirationTime);
  }
}

module.exports = Generation;
