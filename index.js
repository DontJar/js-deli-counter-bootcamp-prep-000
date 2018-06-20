// var katzDeli = []

function takeANumber (katzDeliLine) {
  let i = 1
  i++
  katzDeliLine.push(i);
  return (`Welcome, you have number ${i}.`);
}

function nowServing (katzDeliLine) {
  let message = ""
  if (katzDeliLine.length === 0) {
    message = (`There is nobody waiting to be served!`);
  } else {
    message = (`Currently serving ${katzDeliLine.shift()}.`);
  }

  return message
}

function currentLine (katzDeliLine) {
const x = katzDeliLine.length;
if (x === 0) {
   return (`The line is currently empty.`);
}
else {
let line = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(` ${i + 1}. ${katzDeliLine[i]}`);
  }
  return `The line is currently:${line}`;
  }
}

// } else if (katzDeliLine.length === 1){
//   return (`The line is currently: 1. ${katzDeliLine}.`)
// } else if (katzDeliLine.length === 2){
//   return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}.`)
// } else {
//   return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`)
//   }
// }
//
// My initial code above.  Didn't like how I had completed the lab that way, so I abandoned it for the code below.
