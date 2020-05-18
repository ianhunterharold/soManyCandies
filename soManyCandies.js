/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {

  let max = candies.reduce( (a, b) => {
    return Math.max(a, b) });
  

  let boolArray=[];
  for (let i = candies.length - 1; i >= 0; i--){
    if (candies[i] + extraCandies >= max){
      let boolTruth = boolArray.unshift(true);
    } else {
      let boolFalse = boolArray.unshift(false);
    }
  }
  return boolArray; 
};
const candy = [2,3,5,1,3];
const extra = 3;

kidsWithCandies(candy,extra);



// as a human
// find the greatest value of candies in the array
// max 

// iterate through the candies and add the extra to that i 
// if the value is = or greater than max place true in final array
// if not return false 

// solve as developer
// find greatest value - 
// iterate through array, adding the value to every one 
// if greater or = to max, return true, 

