/*
let i = 3
while (i<=35) {
    console.log(i);
    i +=3;
}

let i = 0;
while (i<100) {
    console.log(i);
    i=+5;
}

let i = 1;
while (i < 20) {
    if (i % 2 === 0) { //is it triple equal to zero (meaning is it divisible by 2)
        const afterMultiply = i * 3;
        console.log(afterMultiply);
    }
    i++;
} //remember with nested conditions the second conditions are in the curly brackets of the first)

let i = 10 - 4;
while (i === 6) {
 const quartersAmount = i * 4;
 console.log(quartersAmount);
 break;
}
*/

let i = 0;
while (i <=20) {
    if (i % 1 === 0 && i % i === 0 ) {
        console.log(i);
    }
    i++;
}
let value = 1;
let accumulator = 0;
while( value <= 20 ) {
    accumulator += value; 
    console.log(accumulator);
    value++;
}

let i = 0;
while (i < 21 ) {
    if ( i % 2 === 0) {
        console.log(i);
    }
    i++;
    }