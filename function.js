//1. function declaration

function print(value){
    console.log(value);
}

print('Holy shit');

//2. parameters
//primitive parameters: passed by value
//object parameters:    passed by reference

class obj {
    constructor () {
        this.p0 = '케인 ';
        this.p1 = '아 ';
        this.p2 = '영양제 ';
        this.p3 = '먹어라?';
    }
    objPrint (){
        console.log(this.p0 + this.p1 + this.p2 + this.p3);
    }
}

Kane = new obj();

Kane.objPrint();

//3. Default parameters (added in ES6)

function fail(value, key = '063'){
    console.log(`value: ${value}, key: ${key}`);
}
fail(3, );

//4. Rest parameters (added in ES6) ...args

some_args = ['3Blue','1Brown','Korean'];
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

printAll(some_args);

for (const arg of some_args) {
    console.log(arg);
}
console.log('----------------');
some_args.forEach((arg) => console.log(arg))

//function is object in JS

//5. Local scope

//6. return a value

//7. early return, early exit
function upgradeUserBad(user){
    if (user.point > 10) {
        //long upgrade logic...
    }
}
function upgradeUserGood(user){
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

//First-class function

//1. Function expression
//a function declaration can be called earlier than it is defined. (hoisted)

print('--------------');

omg()

function omg() {
    console.log("oh my god");
}

//2. Callback function using function expression
//예제: printNo는 named function으로. 디버깅에서 사용

function youloveme (value, printYes, printNo) {
    if (value > 3) {
        printYes();
    }
    else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes');
}

const printNo = function print_no () {
    console.log('no');
}

// Arrow function
//always anonymous

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;


//IIFE: Immediately Invoked Function Expression

(function hello() {
    console.log('IIFE');
})();