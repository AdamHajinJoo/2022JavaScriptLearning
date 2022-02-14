'use strict'

//1. String concatenation   문자열 연결
let strA = '쇼미더';
let strB = '럭키짱'
console.log(strA + ` ` + strB);

//2. Numeric operators
let x = 3;
const y = 4;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//3. Increment and decrement operators
let add = 1;
const preIncrement = ++add;
console.log(`${preIncrement} ${add}`);  //2 2

add = 1;
const postIncrement = add++;
console.log(`${postIncrement} ${add}`); //1 2
console.log(postIncrement)

//4. Assignment operators
console.log(x+=4);
console.log(x-=3);
console.log(x*=4);
console.log(x-=1);

//5. Comparison operators
//x === 15  y === 4
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

console.log(`------------------`);

//6. Logical operators: ||(or)  &&(and) !(not)
// ||, finds the first truthy value
// &&, finds the first falsy value
console.log(true || true || false);
console.log(true && true && false);
console.log(!true);

console.log(`------------------`);

//7. Equality
//== loose equality, with type conversion
//=== strict equality, no type conversion

let t_x = '5';
let t_y = 5;

console.log(t_x == t_y);
console.log(t_x === t_y);

console.log(`------------------`);

//object equality by reference

//equality - puzzler
console.log(0 == false);            //true
console.log(0 === false);           //false. number !== boolean
console.log('' == false);           //true
console.log('' === false);          //false. string !== boolean
console.log(null == undefined);     //true.
console.log(null === undefined);    //false

console.log(`------------------`);

//8. Conditional operators: if, else if, else
let u = 2;

if (u === 1)
{
    console.log('1900년대생 남자');
}
else if (u === 2)
{
    console.log('1900년대생 여자');
}
else
{
    console.log('2000년대생');
}

console.log(`------------------`);

//9. Ternary operator
console.log((u === 1)?'남자':'여자');

console.log(`------------------`);

//10. Switch statement
console.log(`------------------`);

//11. Loops
//while lop, while the condition is truthy,
//body code is executed.

//do while loop, body code is executed first,
//then check the condition.

//for loop, for(begin; condition; step)
//nested loops

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers (use continue)

let i;
for (i = 0; i < 11; i += 2)
{
    console.log(i);
}

//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for ( i = 0; i < 11; i++)
{
    if (i > 8 /*=== 8*/)
    {
        break;
    }
    console.log(i);
/*  else
    {
        console.log(i);
    }*/
}