// Find number of vowels in a word
function getCount(str) {
  let result = 0;
  let string = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const letters of str) {
    if (vowels.includes(letters)) {
      result++;
    }
  }
  return result;
}

//   const {assert} = require("chai");

// describe("Vowels Count Tests",function(){
//   it("should return 5 for 'abracadabra'",function(){
//     assert.strictEqual(getCount("abracadabra"), 5) ;
//   });
// });

//--------------------------------
// Return Positives
function positiveSum(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result += arr[i];
    }
  }
  return result;
}

// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//------------------------

// Return Negative
function makeNegative(num) {
  let result = 0;
  if (num <= 0) {
    return num;
  } else {
    return -Math.abs(num);
  }
}

function makeNEgative(num) {
  return -Math.abs(num);
}
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
//---------------
// Highest and lowest
function highAndLow(numbers) {
  let high = numbers
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);
  let highNum = high[0];
  let lowNum = high[high.length - 1];

  console.log(high);
  return highNum + ' ' + lowNum;
}
//(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
//(highAndLow("1 2 3"), "3 1");
//----------------
// Filter Friends with 4 letters
function friend(friends) {
  return friends.filter((word) => word.length === 4);
}

// assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
// assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
// assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
// assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])

// --------------------
// Multiple if both numbers are positive. return 0 if one number is negative
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

//function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0
// }

// assert.strictEqual(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
//     assert.strictEqual(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
//     assert.strictEqual(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
//     assert.strictEqual(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
//     assert.strictEqual(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');
// -------------------
// Given a number, Find all multiples of 3 or 5, and add them together

// ------ How we got there -------
// function solution(number){
//   let sum = 0
  
//   for (let i = 0; i < number; i++) {
//     if ( i % 3 === 0 || i % 5 === 0){
//       sum += i;
//       continue;
//     } else if (i % 5 === 0) {
//       sum =+ i;
//       continue;
//     } else {
//       continue;
//     }
//   }
//   return sum;
// }

//CLEANED UP CODE
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

// test(10,23)

//--------------