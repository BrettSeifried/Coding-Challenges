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

//Sums of a Branch, starts with root, ends at leaf Node
// Recursion with keep sums

function branchSums(root) {
  // set an array to input sums
  const sums = [];
  //set initial value of 0
  calcSums(root, 0, sums);
  return sums;
}

function calcSums(node, runningSum, sums) {
  //if at end of leaf nodes, return
  if (!node) return;

  //  set a newSum, adding the next value
  const newSum = runningSum + node.value;
  //if at a Leaf node, return the sum
  if (!node.left && !node.right) {
    // Push onto sums array
    sums.push(newSum);
    return;
  }
  // Recursive run through the nodes.
  calcSums(node.left, runningSum, sums);
  calcSums(node.right, runningSum, sums);
}

console.log('BST Sums', branchSums());

// Root/ Node Depth ----------------
// depth = 0 makes an optiona parameter
function nodeDepths(root, depth = 0) {
  //set up Recursion to go through each branch.
  if (root === null) return 0;
  //Runs and adds left and right until null is hit.
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}

console.log('Node Depths', nodeDepths());

// Depth put each node into an array ---------
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  //CODE STARTS HERE
  depthFirstSearch(array) {
    //this gives a node with name, and an array of further names and children
    array.push(this.name);
    //recursion for the next node of children.
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

//Min Waiting time ------------------
function minimumWaitingTime(queries) {
  //sort from smallest to largest
  queries.sort((a, b) => a - b);
  // set a total waiting time to 0
  let waitingTime = 0;
  //loop through entire array
  for (let i = 0; i < queries.length; i++) {
    //set duration to i amount
    const duration = queries[i];
    // add 1 to give a remaining queries left
    const remainingQueries = queries.length - (i + 1);
    // Multiple the i times the remaining
    waitingTime += duration * remainingQueries;
  }
  return waitingTime;
}

console.log('minWaitingTime', minimumWaitingTime([3, 2, 1, 2, 6]));

// Assign by Shirt color and height -----------------
function classPhotos(redShirtHeights, blueShirtHeights) {
  // sort rows to tallest in [0]
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  // set frontRow as Red or Blue
  const frontRow = redShirtHeights[0] < blueShirtHeights[0] ? 'Red' : 'Blue';
  for (let i = 0; i < redShirtHeights.length; i++) {
    // loops through and checks each number in regards to [i] position
    const redShirtHeight = redShirtHeights[i];
    const blueShirtHeight = blueShirtHeights[i];

    if (frontRow === 'Red') {
      // checks if red row is taller at same [i]
      if (redShirtHeight >= blueShirtHeight) return false;
      //Checks if blue row is taller at same [i]
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }
  //if the back row is always taller, return true
  return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));

//Tandem Bicycle, pair LArgest with smallest for fast ----------
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);

  // if looking for slowest, reverse array first
  // can also be redShirtSpeeds.reverse()
  if (!fastest) reverseArray(redShirtSpeeds);
  // set toalspeed to 0
  let totalSpeed = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    //loop through redshirts
    const rider1 = redShirtSpeeds[i];
    //gives last i of the array
    const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - i - 1];
    // find higher number.
    totalSpeed += Math.max(rider1, rider2);
  }
  return totalSpeed;
}

//array.reverse() coded out.
function reverseArray(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const temp = array[start];
    //swap array values
    array[start] = array[end];
    array[end] = temp;
    //once start > end, it ends and is done.
    start++;
    end--;
  }
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));

//Remove Duplicates from a Linked list. If sorted in ascending order
function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  //if null, its end of the list
  while (currentNode !== null) {
    //sets and checks current node with the next one
    let nextDistinctNode = currentNode.next;
    // Not null, AND values are not the same
    while (
      nextDistinctNode !== null &&
      nextDistinctNode.value === currentNode.value
    ) {
      // If above is true, set next node
      nextDistinctNode = nextDistinctNode.next;
    }
    // sets pointer to next disticnt node.
    currentNode.next = nextDistinctNode;
    // now we set current node to the next distincy node
    currentNode = nextDistinctNode;
  }
  return linkedList;
}

console.log(removeDuplicatesFromLinkedList());

//Fibonacci sequence ---------------------
function getNthFib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}
console.log(getNthFib(6));
