//

function reverseString(str) {
  let splitStr = str.split('')
  let reversed = []

  for (let i = 0; i < str.length; i++) {
    reversed.push(splitStr.pop())
  }


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
