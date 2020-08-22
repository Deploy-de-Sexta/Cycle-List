module.exports = class Cycle {
  #items = [];
  #pointer = 0;

  constructor(items) {
    this.#items = items;
  }

  get length() {
    return this.#items.length;
  }

  get() {
    if (!this.#items.length) throw new Error('Cannot get item when array is empty');
    const result = this.#items[this.#pointer];

    if (this.#pointer === this.#items.length - 1) {
      this.#pointer = 0;
    } else {
      this.#pointer += 1;
    }
    
    return result;
  }

  get empty() {
    return this.#items.length === 0;
  }

  head(n) {
    return new Cycle(Array(n).fill(null).map(() => this.get()));
  }

  map(fn) {
    if (this.#pointer === 0) {
      return new Cycle(this.#items.map(i => fn(i)));
    }

    const firstHalf = this.#items.slice(this.#pointer);
    const secondHalf = this.#items.slice(0, this.#pointer);

    return new Cycle(firstHalf.concat(secondHalf).map(i => fn(i)));
  }
}