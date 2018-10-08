/*************************
* Variables and data types
**************************

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher'
console.log(job);


***************************
* Variable mutation and type coercion
****************************

var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried)

// Variable mutation
age = 'twenty eight';
job = 'dishwasher';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);


********************
* Basic Operators
********************

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 20;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "John is older than Mark");
var x;
console.log(typeof x);


/*********************
* Operator precedence
**********************

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Groupiong
var ageJohn = now - yearJohn;
var ageMark =35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// MOre Operators
x *= 2;
console.log(x);
x+= 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

/***********************
* Coding Challenge
************************
Mark and John are trying to compare their BMI
which is calculated using the formula:

BMI = mass / height^2 = mass / (height * height).
(mass in kg and geight in meter.

1. Store Mark and John's mass and height in variables.
2. Calculate both their BMIs.
3. Create a boolean variable containing information about whether
Mark has a higher BMI than John.
4. Print a string ot the console containing the variable from step 3.
(Something like "Is Mark's BMI higher than John's true").


var markHeight, markMass, markBMI, johnHeight, johnMass, johnBMI, higherBMI;

markHeight = 1.69;
markMass = 78;
markBMI = markMass / (markHeight * markHeight);

johnHeight = 1.95;
johnMass = 92;
johnBMI = markMass / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

higherBMI = markBMI >= johnBMI;
console.log('Is Mark\'s BMI higher then John\'s? ' + higherBMI);



/************************
* If / else statements
*************************

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var markHeight, markMass, markBMI, johnHeight, johnMass, johnBMI, higherBMI;

markHeight = 1.69;
markMass = 78;
markBMI = markMass / (markHeight * markHeight);

johnHeight = 1.69;
johnMass = 80;
johnBMI = johnMass / (johnHeight * johnHeight);

console.log('Mark\s BMI = ' + markBMI, 'John\s BMI = ' + johnBMI)

if (markBMI > johnBMI){
  console.log('Mark\s BMI is higher than John\s');
} else {
  console.log('John\s BMI is higher than Mark\s');
}


/*******************
* Boolean Logical
********************

var firstName = 'John';
var age = 30;

if(age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){
  console.log(firstName + ' is a teenager.');
}
else {
  console.log(firstName + ' is a man.');
}

/*******************************************
* The Ternary Operator and Switch statements
* condition [? if True then] this statement [: else] this statement
* the return value can be dynamically assigned to a var
********************************************/

var firstName = 'John';
var age = 13;

age >= 18 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// alternative to the Ternanary Operator using if else statements
/**********************
if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}
***********************/

// Switch statements
var job = 'instructor';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives for Uber.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + '\'s job is unknown');
}

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is unknown.');
}


/*
var firstName = 'John';
var age = 30;

if(age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){
  console.log(firstName + ' is a teenager.');
}
else {
  console.log(firstName + ' is a man.');
} */
