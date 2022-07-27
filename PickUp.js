// Implement a spell checker!
// Input:
//     1) A text file with a newline-separated list of valid words ("the dictionary")
//     2) A text file to be spellchecked, with words separated by newlines and spaces
// Output: A list of all misspelled words from the "to be spellchecked" file.
// (A misspelled word is one that does not appear in the dictionary.)

const fs = require('fs').promises;

let dictionaryFileContents = `
analyze
and
applications
are
as
between
build
business
by
considering
cost
design
discoveries
engineering
engineers
Engineers
forms
fulfill
human
imposed
invent
life
limitations
link
machines
materials
needs
objectives
of
people
practicality
practitioners
quality
regulation
requirements
safety
scientific
structures
subsequent
systems
test
the
The
their
to
while
who
work
`;

let inputText = `Engineers, as practitioners of engineering, are people who invent, design, analyze, build, and test machines, systems,
structures and materials to fulfill objectives and requirements while considering the limitationns imposed by practicality,
regulation, safety, and costy. The work of engineers forms the link between scientific discoveries and their subsequent
applications to human and business-needs and quality of life.`;
// Expected output: ['limitationns', 'costy']

async function setup() {
  // Write dictionary data to 'dict.txt' .
  await fs.writeFile('dict.txt', dictionaryFileContents);

  // Write input text data to 'input.txt' .
  await fs.writeFile('input.txt', inputText);
}

async function spellcheck(dictionaryFilename, inputFilename) {
  const dataDict = await fs.readFile(dictionaryFilename, 'utf8');
  const dataInput = await fs.readFile(inputFilename, 'utf8');
  let result = [];
  //   TODO! (Implement me!)
  // JavaScript file I/O:
  // https://stackoverflow.com/a/56821924

  // import the disctoary & input
  let dictionary = dictionaryFileContents;
  // split the string into an array for dictionary
  const dataDictString = dataDict.split('\n');
  // const dataInputString = dataInput.split(/(\n )/)
  const dataInputString = dataInput.toString().replace(/\n|,/g, '').split(' ');
  // split the input into an array

  // compare inputText to Dictionary Text,
  // .filter if it does not match, put into result
  // Taking Input [i] => pass it through dictionary length to see if it matches.
  for (let i = 0; i < dataInputString.length; i++) {
    const inputCheck = dataInputString[i];
    let inDict = new Boolean(false);
    for (let j = 0; j < dataDictString.length; j++) {
      const dictCheck = dataDictString[j];
      if (inputCheck == dictCheck) {
        //add it to result
        inDict = true;
      }
    }
    if (inDict == false) {
      result.push(inputCheck);
    }
  }
  // If Matching, do nothing
  // if Not Matching, add to result.

  return result;
}

async function main() {
  setup();

  let result = await spellcheck('dict.txt', 'input.txt');

  console.log(result);
}

main();
