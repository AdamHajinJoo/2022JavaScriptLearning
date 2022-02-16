'use strict';

//1. Looping over an array
//print all fruits

let fruits = ['apple', 'banana'];
const prt = () => console.log(fruits);

//a. for
for (let i = 0; i < fruits.length ; i++) {
    console.log(fruits[i]);
}

//b. for in
for (let fruit of fruits) {     //in은 key와 index, of는 value!
    console.log(fruit);
}

//c. forEach ☆
fruits.forEach((fruit) => console.log(fruit));






//2. Addition, deletion, copy

//push: add an item to the end
fruits.push('strawberry','peach');
console.log(fruits);

//pop: remove ~
fruits.pop();
prt();
fruits.pop();
prt();

//unshift: add an item to the beginning
fruits.unshift('strawberry', 'peach');
prt();

//shift: remove ~
fruits.shift();
fruits.shift();
prt();

//note!! shift, unshift are slower than pop, push
//coz when we shift and unshift things, we have to move all data toward or forward.

//splice: remove an item by index position
fruits.push('strawberry','peach');
prt();

// fruits.splice(1);        // delete all except index 1
// prt();
fruits.splice(1,1);         // delete an item starting from index 1
prt();

fruits.splice(1,1,'melon','orange');
prt();



//combine arrays
const fruits2 = ['pear', 'kiwi'];

const newFruits = fruits.concat(fruits2);
console.log(newFruits);





//3. Searching
//indexOf, find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));

//includes
console.log(fruits.includes('melon'));
console.log(fruits.includes('coconut'));

// lastIndexOf

console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));




console.clear();