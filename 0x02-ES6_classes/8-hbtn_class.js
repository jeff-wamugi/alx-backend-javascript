/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize !== 'number') {
      throw TypeError('Size must be number');
    }

    this._size = newSize;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw TypeError('Location must be a string');
    }

    this._location = newLocation;
  }

  // using symobl.primtive to change object to customized primitive value
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    return this.location;
  }
}
