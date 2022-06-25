// for OF, if IN
// finds if two numbers together equal the targetsum
function twoNumberSum(array, targetSum) {
  // Write your code here.
  // set an empty array
  const nums = {};
  //checks each index of the array, no longer let i = 0, i < arr.length .....
  for (const num of array) {
    // takes target, subtracts from each i. targetSum - i = Y
    const matching = targetSum - num;
    if (matching in nums) {
      // if Y === a number in the array, return
      return [matching, num];
    } else {
      //Store in nums if doesn't match targetSum
      nums[num] = true;
    }
  }
  return [];
}

console.log('TwoNumSum', twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// -----------------
// Are All numbers in sequence in Array.
// compare sequence to array, add to lets. if === then true
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

console.log(
  'valid sequence',
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
);

//-------------------
// Square each number in an array,
// For Loop, then sort from lowest to highest.
function sortedSquaredArray(array) {
  // Write your code here.
  // .fill sets array.length to all 0s.
  const sortedArr = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    // set value to i in Array passed through
    const value = array[i];
    // Square the value
    sortedArr[i] = value * value;
  }
  // .sort puts value in order
  sortedArr.sort((a, b) => a - b);
  return sortedArr;
}
console.log('sortedArr', sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));

//------------
// Taking an object of Arrays to find a tournament winner
// for loop, find out which team won the most

// used on line  w/ winning team, looks to results array on who won, 1 or 0
const homeWin = 1;

function tournamentWinner(competitions, results) {
  // Write your code here.

  // setting a vairable for a Winning team
  let leadTeam = '';

  //set the object for keeping score
  const scores = { [leadTeam]: 0 };

  //Run through the competitions being played
  for (let i = 0; i < competitions.length; i++) {
    //Pulls 0 or 1, from results array to see who won
    const result = results[i];
    // Returns which TEAM won.
    const [homeTeam, awayTeam] = competitions[i];
    // Const above at start, if 1, home team wins, else 0 and away team wins
    const winningTeam = result === homeWin ? homeTeam : awayTeam;

    // Function below
    updateScores(winningTeam, 3, scores);

    // if winning team NOW has more points than the lead team, make it the lead team.
    if (scores[winningTeam] > scores[leadTeam]) {
      leadTeam = winningTeam;
    }
  }
  return leadTeam;
}

// see updateScores fx above Grabs team name, gives points, updates scores array
function updateScores(team, points, scores) {
  //if no team is in scores, inserts into object
  if (!(team in scores)) scores[team] = 0;
  //adds points (3) from line 77
  scores[team] += points;
}

console.log(
  'tournamentWinner',
  tournamentWinner(
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
    [0, 0, 1]
  )
);

// -----------
// Finding lowest amount of change when given an index of various amounts
// for OF loop, if less than, add more, if more return
function nonConstructibleChange(coins) {
  // Write your code here.
  // sort coins into lowest to highest
  coins.sort((a, b) => a - b);
  // set current change able to be created
  let purse = 0;
  // loop through coins
  for (const coin of coins) {
    // if the current coin is greater than purse +1, it can not make more.
    if (coin > purse + 1) return purse + 1;
    // else, the next i is lower than the purse + 1, it can be added everything below it
    purse += coin;
  }

  return purse + 1;
}

console.log(
  'Coin sort Lowest amount of change',
  nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])
);

//ISO Gram -----------------------
// see if each letter is unquie in the String
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

console.log('IsoGram', isIsogram('Dermatoglyphics'));

//BST Trees -------------------
function findClosestValueInBst(tree, target) {
  // Recursive function to run through the tre O(log(n))
  return findClosestValueHelper(tree, target, tree.value);
}

function findClosestValueHelper(tree, target, closest) {
  // If no further leafs, return closest, end recursion
  if (tree === null) return closest;
  // Sets a new closest only if smaller.
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  // Move to left side if the target is smaller, Smaller is always lesser
  if (target < tree.value) {
    return findClosestValueHelper(tree.left, target, closest);
    // Move to right side if target is great, Right side always larger
  } else if (target > tree.value) {
    return findClosestValueHelper(tree.right, target, closest);
    //if Equal too target, return.
  } else {
    return closest;
  }
}

console.log(findClosestValueInBst());
