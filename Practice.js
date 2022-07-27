/*
We are working on a security system for a badged-access room in our company's building.

Given an ordered list of employees who used their badge to enter or exit the room, write a function that returns two collections:

1. All employees who didn't use their badge while exiting the room - they recorded an enter without a matching exit. (All employees are required to leave the room before the log ends.)

2. All employees who didn't use their badge while entering the room - they recorded an exit without a matching enter. (The room is empty when the log begins.)

Each collection should contain no duplicates, regardless of how many times a given employee matches the criteria for belonging to it.

records1 = [
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Martha",   "enter"],
  ["Steve",    "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "enter"],
  ["Paul",     "enter"],
  ["Curtis",   "exit"],
  ["Curtis",   "enter"],
  ["Paul",     "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Paul",     "exit"],
  ["Paul",     "exit"] 
]

Expected output: ["Paul", "Curtis", "Steve"], ["Martha", "Curtis", "Paul"]

Other test cases:

records2 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
]

Expected output: [], []

records3 = [
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
]

Expected output: ["Paul"], ["Paul"]

records4 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
  ["Paul", "enter"],
]

Expected output: ["Paul"], ["Paul"]

All Test Cases:
mismatches(records1) => ["Paul", "Curtis", "Steve"], ["Martha", "Curtis", "Paul"]
mismatches(records2) => [], []
mismatches(records3) => ["Paul"], ["Paul"]
mismatches(records4) => ["Paul"], ["Paul"]

n: length of the badge records array
*/
"use strict";

const records1 = [
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Martha",   "enter"],
  ["Steve",    "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "enter"],
  ["Paul",     "enter"],
  ["Curtis",   "exit"],
  ["Curtis",   "enter"],
  ["Paul",     "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Paul",     "exit"],
  ["Paul",     "exit"] 
];

const records2 = [
  ["Paul", "enter"],
  ["Paul", "exit"]
];

const records3 = [
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"]
];

const records4 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
  ["Paul", "enter"]
];

// set exitNoBadge = []
// set enterNoBade = []
// remove duplicates in final array

// loop through
  // for Each
  // look Name, exit or enter.
  // Store Data on name: exit : enter
// if Exit look at data, did enter first?
  // if says exit, we need to  see if there is an enter in a earlier [i]
  // if exit, look name < i && enter. !enter. 2nd group
  
//if Enter, 
  // if enter, check name < && exit. !exit, 1st group OR if there is another enter, 1st group


//Look at the name
// SHOUDL be Enter, if Exit, 2nd group
// look at name, if Exit, check to see if enter. if not, 1st Group




function badgeValidation(records) {
  const noExit = []
  const noEntry = []
  // loop through array
  
  for (let i = 0; i < records.length; i++) {
    for (const record of records) {
      if (record[1] === 'exit'){
        noExit.push(record[0]);
      } else if { (record[1] === 'exit') {
          records[i] > record[1] ? 'enter' noEntry.push()
        }
      }
    // check first person, if exit, push to no Exit array
    }
    if(records[i] === 'exit') noExit.push(i)
    //check if exit, < i && enter do nothing, if !enter 2nd group
    if(records[i] === 'exit') {
      
    }
    //if enter check name > && enter, push to 1st group
  };
}
  console.log(badgeValidation(records1))

function badgeCheck(records) {
    const noExit = []
    const noEntry= []

    
}