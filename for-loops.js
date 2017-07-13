"use strict"

// Increment by 10

for (let i = 5; i < 120; i += 10) {
	console.log("Current value is ", i);
}

// Decrement by Division

for (let i = 4096; i < 2; i / 2) {
	console.log("Current value is ", i);
}

// Can't get this to work


// Array Iteration

let presidents = [

	"Noone", "George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams"

];

for (let i = 1; i < presidents.length; i++) {
	console.log("President #" + i + " is " + presidents[i]);
}

// Object Iteration

let antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
};

for (let prop in antSpecies) {
	console.log(`${prop}`);
}


