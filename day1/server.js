const {
  calcFrequency,
  calcDuplicateFreq
} = require('./calcFrequency');
const fs = require('fs');
const frequencyFile = './freqArray.txt';
const startFreq = 0;

const {
  EOL
} = require('os');

const freqFile = fs.readFileSync(frequencyFile, 'utf8');
const tempArray = freqFile.split(EOL);
const freqArray = tempArray.map((freq) => {
  return (Number(freq))
});

const frequency = calcFrequency(startFreq, freqArray);
console.log(`final frequency calculation: ${frequency}`);

console.log(`Calculating first duplicate frequence, be patient, this one takes time!`);
const duplicateFrequency = calcDuplicateFreq(startFreq, freqArray);
console.log(`first duplicate frequency: ${duplicateFrequency}`);