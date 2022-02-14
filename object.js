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

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');



//3. Property value shorthand

