const Cycle = require('./cycle');

describe('Cycle', () => {
  describe('Length', () => {
    it('Returns items length', () => {
      const cycle = new Cycle([1, 2, 3]);
      expect(cycle.length).toEqual(3);
    });

    it('Returns zero when array is empty', () => {
      const cycle = new Cycle([]);
      expect(cycle.length).toEqual(0);
    });
  });

  describe('Get', () => {
    it('throws error when items is empty', () => {
      const cycle = new Cycle([]);
      expect(() => cycle.get()).toThrow(new Error('Cannot get item when array is empty'));
    });

    it('returns default value if items is empty', () => {
      const cycle = new Cycle([]);
      expect(cycle.get(7)).toEqual(7);
    });

    it('Get items in sequence', () => {
      const cycle = new Cycle([1, 2]);
      expect(cycle.get()).toEqual(1);
      expect(cycle.get()).toEqual(2);
    });

    it('Cycles all items', () => {
      const cycle = new Cycle([1, 2]);
      expect(cycle.get()).toEqual(1);
      expect(cycle.get()).toEqual(2);
      expect(cycle.get()).toEqual(1);
    });
  });

  describe('Got', () => {
    it('throws error when items is empty', () => {
      const cycle = new Cycle([]);
      expect(() => cycle.got()).toThrow(new Error('Cannot get item when array is empty'));
    });

    it('Get items in reverse sequence', () => {
      const cycle = new Cycle([1, 2]);
      expect(cycle.got()).toEqual(2);
      expect(cycle.got()).toEqual(1);
    });

    it('Cycles all items', () => {
      const cycle = new Cycle([1, 2]);
      expect(cycle.got()).toEqual(2);
      expect(cycle.got()).toEqual(1);
      expect(cycle.got()).toEqual(2);
    });
  });

  describe('Empty', () => {
    it('Returns true if items is empty', () => {
      const cycle = new Cycle([]);
      expect(cycle.empty).toEqual(true);
    });

    it('Returns false if items is empty', () => {
      const cycle = new Cycle([1]);
      expect(cycle.empty).toEqual(false);
    });
  });

  describe('Head', () => {
    it('Returns a new cycle instance', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle = cycle.head();

      expect(newCycle).toBeInstanceOf(Cycle);
      expect(newCycle).not.toBe(cycle);
    });

    it('Returns first item if no argument is passed', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle = cycle.head();

      expect(newCycle.get()).toEqual(1);
      expect(newCycle.length).toEqual(1);
    });

    it('Returns first N items', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle = cycle.head(2);

      expect(newCycle.get()).toEqual(1);
      expect(newCycle.get()).toEqual(2);
      expect(newCycle.length).toEqual(2);
    });

    it('Cycles the items', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle  = cycle.head(4);

      expect(newCycle.length).toEqual(4);
      expect(newCycle.get()).toEqual(1);
      expect(newCycle.get()).toEqual(2);
      expect(newCycle.get()).toEqual(3);
      expect(newCycle.get()).toEqual(1);
    });
  });

  describe('Tail', () => {
    it('Returns a new cycle instance', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle = cycle.tail();

      expect(newCycle).toBeInstanceOf(Cycle);
      expect(newCycle).not.toBe(cycle);
    });

    it('Returns previous item if no argument is passed', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle = cycle.tail();

      expect(newCycle.get()).toEqual(3);
      expect(newCycle.length).toEqual(1);
    });

    it('Returns first N items', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle = cycle.tail(2);

      expect(newCycle.get()).toEqual(3);
      expect(newCycle.get()).toEqual(2);
      expect(newCycle.length).toEqual(2);
    });

    it('Cycles the items', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle  = cycle.tail(4);

      expect(newCycle.length).toEqual(4);
      expect(newCycle.get()).toEqual(3);
      expect(newCycle.get()).toEqual(2);
      expect(newCycle.get()).toEqual(1);
      expect(newCycle.get()).toEqual(3);
    });
  });

  describe('Dup', () => {
    it('Creates new cycle instance', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle  = cycle.dup;

      expect(newCycle).toBeInstanceOf(Cycle);
      expect(newCycle).not.toBe(cycle);
    });

    it('Duplicates cycle', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle  = cycle.dup;

      expect(newCycle.get()).toEqual(1);
      expect(newCycle.get()).toEqual(2);
      expect(newCycle.get()).toEqual(3);
      expect(newCycle.length).toEqual(3);
    });

    it('Duplicates cycle beginning on the current pointer position', () => {
      const cycle = new Cycle([1, 2 ,3]);
      cycle.get();
      
      const newCycle  = cycle.dup;

      expect(newCycle.get()).toEqual(2);
      expect(newCycle.get()).toEqual(3);
      expect(newCycle.get()).toEqual(1);
      expect(newCycle.length).toEqual(3);
    });
  });

  describe('Uniq', () => {
    it('Creates new cycle instance', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle  = cycle.uniq;

      expect(newCycle).toBeInstanceOf(Cycle);
      expect(newCycle).not.toBe(cycle);
    });

    it('Returns unique items', () => {
      const cycle = new Cycle([1, 1, 2, 2, 3]);
      const newCycle  = cycle.uniq;

      expect(newCycle.get()).toEqual(1);
      expect(newCycle.get()).toEqual(2);
      expect(newCycle.get()).toEqual(3);
      expect(newCycle.length).toEqual(3);
    });
  });

  describe('Array', () => {
    it('returns an array', () => {
      const cycle = new Cycle([1, 2 ,3]);
      
      expect(cycle.array).toBeInstanceOf(Array);
      expect(cycle.array).toEqual([1, 2, 3]);
    });

    it('Returns array from current pointer', () => {
      const cycle = new Cycle([1, 2, 3]);
      cycle.get();

      expect(cycle.array).toEqual([2, 3, 1]);
    });

    it('dont allow changing original cycle', () => {
      const cycle = new Cycle([1, 2, 3]);
      const arr = cycle.array;

      arr.push(4);

      expect(cycle.array).toEqual([1, 2, 3]);
    });

    it('items starts at current pointer position', () => {
      const cycle = new Cycle([1, 2, 3]);

      cycle.get();

      expect(cycle.array).toEqual([2, 3, 1]);
    });
  });

  describe('Append', () => {
    it('returns new cycle', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle = cycle.append(4);

      expect(newCycle).toBeInstanceOf(Cycle);
      expect(newCycle).not.toBe(cycle);
    });

    it('Returns cycle with new item', () => {
      const cycle = new Cycle([1, 2, 3]);
      const newCycle = cycle.append(4);

      expect(newCycle.array).toEqual([1, 2, 3, 4]);
    });

    it('Returns new cycle starting at current pointer position', () => {
      const cycle = new Cycle([1, 2, 3]);
      cycle.get();

      const newCycle = cycle.append(4);

      expect(newCycle.array).toEqual([2, 3, 1, 4]);
    });
  });

  describe('Prepend', () => {
    it('returns new cycle', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle = cycle.prepend(4);

      expect(newCycle).toBeInstanceOf(Cycle);
      expect(newCycle).not.toBe(cycle);
    });

    it('Returns cycle with new item', () => {
      const cycle = new Cycle([1, 2, 3]);
      const newCycle = cycle.prepend(4);

      expect(newCycle.array).toEqual([4, 1, 2, 3]);
    });

    it('Returns new cycle starting at current pointer position', () => {
      const cycle = new Cycle([1, 2, 3]);
      cycle.get();

      const newCycle = cycle.prepend(4);

      expect(newCycle.array).toEqual([4, 2, 3, 1]);
    });
  });

  describe('Filter', () => {
    it('returns new cycle', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle = cycle.filter(n => n === 2);

      expect(newCycle).toBeInstanceOf(Cycle);
      expect(newCycle).not.toBe(cycle);
    });

    it('Returns with filtered item', () => {
      const cycle = new Cycle([1, 2, 3]);
      const newCycle = cycle.filter(n => n < 3);

      expect(newCycle.array).toEqual([1, 2]);
    });

    it('Returns new cycle starting at current pointer position', () => {
      const cycle = new Cycle([1, 2, 3]);
      cycle.get();

      const newCycle = cycle.filter(i => i < 3);

      expect(newCycle.array).toEqual([2, 1]);
    });
  });

  describe('Map', () => {
    it('Returns a new cycle instance', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle = cycle.map(i => i);

      expect(newCycle).toBeInstanceOf(Cycle);
      expect(newCycle).not.toBe(cycle);
    });

    it('Returns items mapped based on function', () => {
      const cycle = new Cycle([1, 2 ,3]);
      const newCycle  = cycle.map((i) => i * 2);

      expect(newCycle.get()).toEqual(2);
      expect(newCycle.get()).toEqual(4);
      expect(newCycle.get()).toEqual(6);
    });

    it('Returns items mapped based on function', () => {
      // Arrange
      const cycle = new Cycle([1, 2 ,3]);
      cycle.get();

      // Act
      const newCycle  = cycle.map(i => i * 2);

      // Assert
      expect(newCycle.get()).toEqual(4);
      expect(newCycle.get()).toEqual(6);
      expect(newCycle.get()).toEqual(2);
    });
  });
  
});