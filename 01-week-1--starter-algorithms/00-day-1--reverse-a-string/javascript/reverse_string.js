// will be reverising this string without built-in reverse method.
//using iteration
function reverseString(str) {
  // declaring variable reversed and initializing it with empty string
  let reversed = '';
  // using for loop to iterate through string
    for (const c of str) {
      // appending empty string on to c and the setting it to varaible reversed
        reversed = c + reversed;
    }
    //returning reversed outside of loop
    return reversed;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'hi'");
  console.log("=>", reverseString("ih"));

  console.log("");

  console.log("Expecting: 'catbaby'");
  console.log("=>", reverseString("ybabtac"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
