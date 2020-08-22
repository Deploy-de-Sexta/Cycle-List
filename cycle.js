module.exports = class Cycle {
  #items = [];
  #pointer = 0;

  constructor(items) {
    this.#items = items;
  }

  get length() {
    return this.#items.length;
  }

  get(default_) {
    if (this.empty) {
      if (default_) {
        return default_;
      }

      throw new Error('Cannot get item when array is empty');
    }

    const result = this.#items[this.#pointer];

    if (this.#pointer === this.length - 1) {
      this.#pointer = 0;
    } else {
      this.#pointer += 1;
    }
    
    return result;
  }

  got() {
    if (this.empty) throw new Error('Cannot get item when array is empty');

    if (this.#pointer === 0) {
      this.#pointer = this.length - 1;
    } else {
      this.#pointer -= 1;
    }

    const result = this.#items[this.#pointer];
    
    return result;
  }

  get empty() {
    return this.#items.length === 0;
  }

  head(n) {
    return new Cycle(Array(n).fill(null).map(() => this.get()));
  }

  tail(n) {
    return new Cycle(Array(n).fill(null).map(() => this.got()));
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