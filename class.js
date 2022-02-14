//1. Class
// An object is 

class Human {
    constructor (name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    //2. Getter and Setter

    get age() {
        if (this._age < 10) {
            return 10;
        }        
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    speak() {
        console.log(`Hello, ${this.name}! How old are you?`);
        console.log(`${this.name}: I'm ${this.age}-year-old.`);
    }
}


const Hajin = new Human('Hajin', 18, 179);
const Kane = new Human('Jinwoo',40,168);

Kane.speak();
console.log('------------------------');
console.log(Hajin.name);
console.log(Kane.age);

const user1 = new Human('User1',-1,13);
console.log(user1.age);



// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// public :     접근 제한이 없음
// protected :  동일한 패키지 내에 존재하거나 파생클래스에서만 접근 가능
// default :    아무런 접근 제한자를 명시하지 않으면 default 값이 되며, 동일한 패키지 내에서만 접근이 가능
// private :    자기 자신의 클래스 내에서만 접근이 가능

class User {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    #privateconstructor () {
        this.height = 168;
        this.weight = 61;
    }
}

const user2 = new User('name', 'any');

console.log(user2.name);
console.log(user2.weight);



// 4. Static properties and methods
// Too soon!

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher);     //static으로 하면 article1, 2가 아니고 클래스 Article
Article.printPublisher();           //메모리 사용을 줄인다



// 5. Inheritance and Variety
class Shape {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    
    getArea () {
        console.log(this.w * this.h);
    }

    toString () {           //toString은 Object에서 상속. overwriting이 가능
        console.log(`width: ${this.w}  height: ${this.h}`);
    }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 40);

class Triangle extends Shape {
    getArea () {
        console.log(this.w * this.h / 2);
    }
}
const triangle = new Triangle(20, 40);

rectangle.getArea();
triangle.getArea();



//6. Class checking: instaceof
console.log(rectangle instanceof Rectangle);    //True
console.log(triangle instanceof Rectangle);     //False
console.log(triangle instanceof Triangle);      //True
console.log(triangle instanceof Shape);         //True
console.log(triangle instanceof Object);        //True

triangle.toString();