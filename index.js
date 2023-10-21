
  // Write your algorithm here

  function hasTargetSum(array, target) {

  for (let i = 0 ; i < array.length ; i++ ) { 

    for ( let j = i + 1; j <array.length; j++){
     
      if (array[i] + array[j] === target){

        return true
        
      }
    }
  }

   return false
}


/* 
  Write the Big O time complexity of your function here

  This will be a O(n^2)
*/

/* 
  Add your pseudocode here 

  input array  and target sum 

  start with 1st element in the array , index 0, 
  add it to each number in the rest of the array (loop)
    if startingIndex  + lastnumber in array (array.lenght - 1 ) ...
    if sum is equl to target number return true 
    else return false 

    Repeat for each element in the array ---> a loop with in a loop 

*/

/*
  Add written explanation of your solution here

  In my for we start with the array input and start a loop sends each number in the array into the second loop and stops once 
it has pushed all the numbers in the array to the second loop. 

The second loop takes that number and adds the other numbers in the array one by one starting on the number after the firts (index 1). 
If any of those numbers are equal to the target it returns true. If no number meets the condidtion the loop ends and exits returning false 
as a last estep. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
