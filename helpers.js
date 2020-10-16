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
  return +mostFrequent;
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

 /**
  * find the average mean: add up all the numbers and then divide by the number of numbers
  */
 function findMean(nums) {
   if(nums.length === 0) return 0;
   return nums.reduce(function(acc, cur) {
     return acc + cur;
   }) / nums.length
 }


 /**
  * find the middle value: sort list and then find the middle
  */
 function findMedian(nums) {
  nums.sort((a,b) => a-b);
  let middleIndex = Math.floor(nums.length / 2);
  let median;
  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) /2;
  } else {
    median = nums[middleIndex];
  }
   return median;
 }

 module.exports = {
  createFrequencyCounter,
  findMean,
  findMedian,
  findMode,
  convertAndValidateNumsArray
};


let example2 = [1,2,4,2,1,4,6,9]
let example = [1,2,1,1,1,'a', 'a', 'a', 'a', 'a']
// console.log('example', example)
// console.log(findMedian(example2))

// console.log(findMean(example2))
// console.log(findMode(example))
// console.log(createFrequencyCounter(example))
// console.log(convertAndValidateNumsArray(example2))