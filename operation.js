//1. String concatenation   문자열 연결

//2. Numeric operators

//3. Increment and decrement operators
let add = 1;
const preIncrement = ++add;
console.log(`${preIncrement} ${add}`);  //2 2

add = 1;
const postIncrement = add++;
console.log(`${postIncrement} ${add}`); //1 2
console.log(postIncrement)

//4. Assignment operators

//5. Comparison operators

//6. Logical operators: ||(or)  &&(and) !(not)
// ||, finds the first truthy value
// &&, finds the first falsy value

//7. Equality

//== loose equality, with type conversion
//=== strict equality, no type conversion

//object equality by reference

//equality - puzzler
console.log(0 == false);            //true
console.log(0 === false);           //false. number !== boolean
console.log('' == false);           //true
console.log('' === false);          //false. string !== boolean
console.log(null == undefined);     //true.
console.log(null === undefined);    //false


//8. Conditional operators: if, else if, else

//9. Ternary operator

//10. Switch statement

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