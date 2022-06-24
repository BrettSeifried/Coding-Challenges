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

// used on line 73, looks to results array on who won, 1 or 0
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
    // Line 55, if 1, home team wins, else 0 and away team wins
    const winningTeam = result === homeWin ? homeTeam : awayTeam;

    //Line 88 Function
    updateScores(winningTeam, 3, scores);

    // if winning team NOW has more points than the lead team, make it the lead team.
    if (scores[winningTeam] > scores[leadTeam]) {
      leadTeam = winningTeam;
    }
  }
  return leadTeam;
}

// Line 64 Grabs team name, gives points, updates scores array
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
