'use strict';

// object는 key와 value의 집합체이다

// 1. Literals and properties
// 상수는 변하지 않는 변수
// 리터럴은 변수에 넣는 변치 않는 데이터

const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name:'ellie', age:4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;

console.log(ellie.hasJob);
console.log('--------------------------');



//2. Computed properties
// 실시간으로 받아오고 싶을 때
console.log(ellie.name);
console.log(ellie['name']);     //string type으로!
ellie['hasJob'] = true;
console.log(ellie.hasJob);


//i.e.
// function printValue(obj, key) {
//     console.log(obj[key]);
// }
// printValue(ellie, 'name');
// printValue(ellie, 'age');



// 5. in operator: property existence check (key in obj)
delete ellie.hasJob;

console.log('name' in ellie);
console.log('hasJob' in ellie);


// 6. for ..in, for ..of

for (let key in ellie) {
    console.log(key);
}

const args = [1, 2, 4, 5];

for (let value of args) {
    console.log(value);
}

class mania {
    constructor (fav, hate) {
        this.fav = fav;
        this.hate = hate;
    }
}

function madeOf(mania) {
    console.log(`fav: ${mania.fav}, hate: ${mania.hate}`);
}

const man = new mania('우왁굳', '혐팬치');

madeOf(man);

const man2 = man;
// man2.fav = '케인';

madeOf(man);

console.log('--------------------------------');

//old way cloning

let man3 = {};
for (let key in man) {
    man3[key] = man[key];
}

madeOf(man3);

let man4 = {};
man4 = Object.assign({},man3);
madeOf(man4);


const person1 = {name: 'Ohong'};
const person2 = {name: 'Nice', property: 'Moongtangee'};

const person3 = Object.assign({}, person1, person2);

for(let key in person3){
    console.log(person3[key]);
}

