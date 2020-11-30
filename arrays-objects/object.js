// const yourInstructor = [
//     "angel", 
//     "juarez",
//      22,
//       "Katherine", 
//       18,
//        "Nicole"];

//below is an object containing values
// const yourInstructor = {
//     firstName: "Angel",
//     lastName: "Juarez",
//     age: 22,
//     catsName: "Katherine"
//     //^key      ^value
// };

// console.log(yourInstructor.firstName); //< how to access a specific value in an object
// console.log(yourInstructor['catsName']); //also a way to console log with unique named elements
//things inside of your object are not global variables
//avoid hypen you could use underscores instead

const placesToGo = {
    southKorea: "Lots of spicy food and good seafood",
    germany = "Night-life is very good, I like house music",
    texas = "I like barbecue very much",
    nightCity = "I really like cyberpunk and can't wait for it's release",
    christmasIsland = "Land of the crabs",
    unionSquare : {
        expensiveMarket: "whole foods",
        dumplingSpot: "Kent's dumplings"
    }
}

console.log(placesToGo.unionSquare.dumplingSpot);
//^Kent's dumplings gets logged you can nest as many things as you want
//if you're nesting objects inside of each other theres usually a better way

const arr = [1, 2, 3];
console.log(...arr); //we use this to make copies of things
        //  ^ spread operator will give you each value in arr individually
//if you put an array of strings it will get rid of the commas and make a sentence





