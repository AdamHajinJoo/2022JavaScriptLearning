//1. use strict
//for vanilla Js
//added in ES5
'use strict';

//2. variable   rw(read and write)
//let: added in ES6
let fruit = '사과';         // global scope
console.log(`fruit: ${fruit}`);
fruit = '배';
console.log(fruit);

{
    let name = 'Hajin';     // block scope
    console.log(fruit);
    console.log(name);
}
console.log(name)   //expecting: 

console.log(age);   //expecting: undefined
var age = 30;   //var hoisting: move declaration from bottom to top
                //no block scope

//3. constant   r(read only)
//Immutable data types: primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS

//primitive type saves its value
//const type saves its memory location.

//use const whenever possible.
//only use let if variable needs its change.

//favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const birthday = '050511';
console.log(birthday);


//4. Variable types
//4-1. primitive, single item: number, string, boolean, null, undefined, symbol
//number
let a = 1;
let b = 1.414;
console.log(`value: ${a} type: ${typeof a}`);
console.log(`value: ${b} type: ${typeof b}`);
//number - special numeric values: Infinity, -Infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
let char = 'c';
let string = 'adam';
let greeting = '안녕 '+string;
console.log(char);
console.log(string);
console.log(greeting);

//boolean
//false: 0, null, undefined, Nan, ''
//true: any other value

//null
let nothing = null;
console.log(`value: ${nothing} type: ${typeof nothing}`);
//undefined
let x;
console.log(`value: ${x} type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
console.log(symbol1.description);
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

//4-2. object, box container
const adam = { name: 'Adam', age: 18 };

//4-3. function, first-class function --> 함수도 변수에 할당 가능하다

//5. Dynamic typing: dynamically typed language
let text = 'Hello'; //expecting: string
console.log(text.charAt(0));    //H
console.log(`value: ${text} type: ${typeof text}`);
text = 1;           //expecting: number
console.log(`value: ${text} type: ${typeof text}`);
text = '7' + 5;     //expecting: string
console.log(`value: ${text} type: ${typeof text}`);
text = '8' / '2';   //expecting: number
console.log(`value: ${text} type: ${typeof text}`);