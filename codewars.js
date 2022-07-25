// Find number of vowels in a word
function getCount(str) {
    let result = 0
    let string = str.split('')
    const vowels = ['a', 'e', 'i', 'o', 'u']
      for ( const letters of str) {
        if(vowels.includes(letters)) {
          result++
        }
  }
    return result
  }

//   const {assert} = require("chai");

// describe("Vowels Count Tests",function(){
//   it("should return 5 for 'abracadabra'",function(){
//     assert.strictEqual(getCount("abracadabra"), 5) ;
//   });
// });

//--------------------------------