function calcFrequency(start, changeArr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const changed = changeArr.reduce(reducer);
  return Number(start) + Number(changed);
}

function calcIndividualFreq(start, changeArr) {
  console.log(`calcIndividualFreq -start: ${start} -changeArr: ${changeArr}`)
  let tempFreq = start;
  const tempArr = changeArr.map((freq) => {
    return tempFreq += freq;
  });
  return tempArr;
}

function calcDuplicateFreq(start, changeArr) {
  let i = 0;
  let sum = start;
  const freqSumsArray = [];
  const len = changeArr.length;

  do {
    if (i >= len) {
      i = 0;
    }
    sum += changeArr[i];
    freqSumsArray.push(sum);
    i++;
  } while (freqSumsArray.indexOf(sum) === freqSumsArray.length - 1);

  return sum;
}

module.exports = {
  calcFrequency,
  calcIndividualFreq,
  calcDuplicateFreq
}