// Write your solution here!
// original array
const cats = ["Milo", "Otis", "Garfield"];

//Destructively appends cat to the end of array
function destructivelyAppendCat(name) {
    cats.push(name);
}

//Destructively prepends cat to the beginning of array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

//Destructively removes last cat from array
function destructivelyRemoveLastCat() {
    cats.pop();
}

//Destructively removes first cat from array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

//Appends cat to the array and returns new array (non-destructive)
function appendCat(name) {
    return [...cats, name]; 
}

//Prepends a cat to the array and returns a new array (non-destructive)
function prependCat(name) {
    return [name, ...cats]; 
}

//Removes the last cat from the array and returns a new array (non-destructive)
function removeLastCat() {
    return cats.slice(0, -1);
}

//Removes the first cat from the array and returns a new array (non-destructive)
function removeFirstCat() {
    return cats.slice(1);
}
