'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
function Blob(firstrate) {
  this.rate = firstrate;
}

var blob = new Blob();

var rate = 1;
var hours = 0;
var consumedPersons = 0;
while (consumedPersons < 1000) {
  consumedPersons += rate;
  hours++;
  rate++;
}
console.log('In ' + hours + ' hours, persons are been consumed totally.');

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)
hoursSpentInDowington = hours;

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var rate = peoplePerHour;
  var hours = 0;
  var consumedPersons = 0;
  while (consumedPersons < population) {
    consumedPersons += rate;
    hours++;
    rate++;
  }
  return hours;
}
Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(1200, 1) === 49, '49 days needed.');
assert(blob.hoursToOoze(999, 2) === 44, '44 days needed.');
assert(blob.hoursToOoze(3000, 3) === 75, '75 days needed.');
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(planet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homeplanet = planet;
  this.language = language;
}

// sb is a SentientBeing object
function sayHello(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

     /*jshint validthis:true */
  console.log(hello[this.language]);
  return hello[sb.language];
    //TODO: put this on the SentientBeing prototype
}
SentientBeing.prototype.sayHello = sayHello;
// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
var Klingon = new SentientBeing('Qo\'noS', 'klingon');
var Romulan = new SentientBeing('Romulus', 'romulan');
var Human = new SentientBeing('Earth', 'federation standard');

assert(Human.sayHello(Klingon) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert(Romulan.sayHello(Klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
assert(Human.sayHello(Romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert(Romulan.sayHello(Human) === 'hello',
  'the human should hear hello');
assert(Klingon.sayHello(Human) === 'hello',
  'the klingon should hear nuqneH');
assert(Klingon.sayHello(Romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) {
      return -1;
    }
    if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
      return 1;
    }
    return 0;
  }
  stringArray.sort(byLastLetter);
}

function compArray(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  var i;
  for (i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

var arr1 = ['hello', 'abc', 'world', 'codefellows'];
var arr2 = ['WA', 'FL', 'HI', 'AK'];
lastLetterSort(arr1);
lastLetterSort(arr2);
assert(compArray(arr1, ['abc', 'world', 'hello', 'codefellows']), 'fail to sort arr1');
assert(compArray(arr2, ['WA', 'HI', 'AK', 'FL']), 'fail to sort arr2');

function sumArray(numArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numArray.forEach(
    function(value) {
      sum += value;
    }
  );
  return sum;
}

assert(sumArray([10, 20, 20]) === 50, 'The sum of array is 50.');
assert(sumArray([33, 66, 11]) === 110, 'The sum of array is 110.');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    return sumArray(a) - sumArray(b);
  });
}

function comp2dArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  var i;
  for (i = 0; i < a.length; i++) {
    if (compArray(a[i], b[i]) === false) {
      return false;
    }
  }
  return true;
}

var arr3 = [[2, 22, 4], [4, 5, 6]];
var arr4 = [[7, 8, 9], [11, 12, 13]];
sumSort(arr3);
sumSort(arr4);
assert(comp2dArrays(arr3, [[4, 5, 6], [2, 22, 4]]), 'fail to sort arr3.');
assert(comp2dArrays(arr4, [[7, 8, 9], [11, 12, 13]]), 'fail to sort arr4.');
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
