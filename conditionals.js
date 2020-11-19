/*
!('angel' === 'angel') ?
 console.log('this is in the if block')
  :
 console.log('this is in the else block');

 //with the bang in front the expression becomes false
 //example
 const isSignedIn = true;
 if(!isSignedIn) {
     console.warn('You are not signed in');
     console.error("Don't get hacked");
 }
 //these two console messages will write in differenet styles
 
 if(true) {
    console.log('hysdkfghl')
    if(false) {
        console.log('nested if block');
    } else {
        console.log('nested else block');
    }
    }
 else {
     console.log('this is the non nested else block');
 }
//this is an example of a nested if block but idk if its right
const age = 18;
if(age>=21) {
    console.log('welcome to the club. Here is a drink');
} else {
    console.log('your fake id sucks');
}

//what the hell is going on with curly brackets

let num = 20;
if(num < 0) {
    console.log('That number is negative');
} else if(num > 0) {
    console.log('That number is positive');
}

let num = 10;
if(num < 18) {
    console.log('Access denied');
} else if(num >18) {
    console.log('Access Granted');
}
 
let num = 20
if(num > 100 && num > 0)  {
    console.log('Positive Over 100');
} else(num < 100 && num > 0); {
    console.log('Positive Under 100') 
} if(num < 100 && num > 0); {
    console.log('negative');
}

let firstNumber = 23
let secondNumber = 80
if(firstNumber > secondNumber) {
    console.log('The first number is larger');
} else(firstNumber < secondNumber);
    console.log('The second number is larger');


let studentGrade = 12
if(studentGrade >= 90) {
    console.log('Student Grade A');
} else if(studentGrade >= 80) {
    console.log('Student Grade B');
} else if(studentGrade >= 70) {
    console.log('Student Grade C');
} else if(studentGrade >= 55) {
    console.log('Student Grade D');
} else if(studentGrade <= 55) {
    console.log('Student Grade F');
}
    

let timeOfDay = 0500
if(timeOfDay >= 0500 && timeOfDay <= 1159) {
    console.log('Good Morning');
} else if(timeOfDay >= 1200 && timeOfDay <= 1600) {
    console.log('Good Afternoon');
} else {
    console.log('Hey There');
}
for statement 1; statement 2; statement 3) {
    code block to be executed
}
statement 1 is exceuted before the loop (code block) starts


let poundSign = "";
for(let i = 0; i < 8; i++) {
    poundSign += "#";
    console.log(poundSign);
}

for(let i = 10; i > 0; i--) {
    console.log(i);
}
*/
for(let i = 6;  i <= 60; i += 3) {
    console.log(i);
}