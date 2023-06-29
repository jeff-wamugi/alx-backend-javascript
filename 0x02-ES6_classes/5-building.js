/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if ((this.constructor !== Building) && this.evacuationWarningMessage() === 'not used') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }

    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    if (!this.sqft) {
      return 'not used';
    }
    return 'not used';
  }
}
