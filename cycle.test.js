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