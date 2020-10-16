/**
 * Build a frequency counter object from an array
 */
function createFrequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0 ) + 1
    return acc;
  }, {});
}

/**
 * Find the most common element in an array
 */
function findMode(arr) {
  let freqCounter = createFrequencyCounter(arr);
  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    //if value of key is more than count
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key]
    }
  }
  return mostFrequent
}

/**
 * Attempt to convert an array of strings to an array of numbers
 */

 function convertAndValidateNumsArray(numsAsStrings){
   let result = []
   for (let i = 0; i < numsAsStrings.length; i++) {
     let valToNumber = Number(numsAsStrings[i]);
     if (Number.isNaN(valToNumber)) {
       return new Error(
         `The value '${numsAsStrings[i]} at index ${i} is not a valid number`
       );
     }
     result.push(valToNumber)
   }
   return result;
 }