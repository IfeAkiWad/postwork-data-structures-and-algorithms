/*The selection sort algorithm sorts an array by repeatedly finding the minimum element (lowest value) in the input Array, and then putting it at the correct location in the sorted Array.

Input: [3, -1, 5, 2]
Output: [-1, 2, 3, 5]
*/

function selectionSort(arr) {
  // type your code here

  // so I'm finding the lowest elementin the array and plcing it in it's sorted place in the array
  //  i'm thinking sliding window

  const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
  }

  return sorted;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
