const { expect } = require('chai');
const {
  calcFrequency,
  calcIndividualFreq,
  calcDuplicateFreq
} = require('../day1/calcFrequency');


describe('advent of code day 1 puzzle one', () => {

  describe('with a change of +1 the current frequency should be 1', () => {
    let newFrequency;
    before(() => {
      newFrequency = calcFrequency(0, [1]);
      console.log("boo:", newFrequency);
    });
    it('should have a new frequency of 1', () => {
      expect(newFrequency).to.equal(1);
    });
  });

  describe('with an array of changes it should process each change', () => {
    //-1, -2, -3 results in -6
    const changeArr = [-1, -2, -3];
    let newFrequency;
    before(() => {
      newFrequency = calcFrequency(0, changeArr);
    });
    it('should have a new frequency of -6', () => {
      expect(newFrequency).to.equal(-6);
    });
  });

  describe('with an array of changes it should process each change', () => {
    //-1, -2, -3 results in -6
    const changeArr = [-1, -2, -3, 6, 7];
    let newFrequency;
    before(() => {
      newFrequency = calcFrequency(0, changeArr);
    });
    it('should have a new frequency of 7', () => {
      expect(newFrequency).to.equal(7);
    });
  });
});

describe('advent of code day 1 puzzle 2', () => {
  describe('with an array of frequency changes', () => {
    const changeArr = [-6, 3, 8, 5, -6];
    const startFreq = 0;
    let freqArray;
    // const expectedFreq = [-6, -3, 5, 10, 4, -2, 1, 9, 14, 8, 2, 5];
    const expectedFreq = [-6, -3, 5, 10, 4];
    before(() => {
      freqArray = calcIndividualFreq(startFreq, changeArr);
    });

    it('should calculate the frequency for each change', () => {
      expect(freqArray).to.deep.equal(expectedFreq);
    });

  });

  describe('then with an array of frequency changes', () => {
    const changeArr = [-6, 3, 8, 5, -6];
    const startFreq = 0;
    let duplicateFreq;
    before(() => {
      duplicateFreq = calcDuplicateFreq(startFreq, changeArr);
    });

    it('should keep looping until it finds a duplicate frequency', () => {
      expect(duplicateFreq).to.equal(5);
    });
  });
});