# Javascript Basics concepts

Different ways to declare variables

```js
var a = 10;
let b = 20;
const c = 30;
```
var is function scoped, let and const are block scoped

---
Arrow function syntax

```js
const add = (a, b) => {
  return a + b;
}
```
 ---
 Exports and imports
- default exports
```js
// module.js
const add = (a, b) => {
  return a + b;
}
 
export default add;
```
```js

// index.js
import add from './module.js';
```

- named exports
```js
// module.js
export const add = (a, b) => {
  return a + b;
}

export const sub = (a, b) => {
  return a - b;
}
```
```js
// index.js
import { add, sub } from './module.js';
```

---
Classes

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

const person1 = new Person('John', 30);
person1.greet();
```
Extends
```js
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
  info() {
    return `${this.name} owes ${this.balance}`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);
console.log(customer1.info());
```
---

Spread and rest operators

```js
//spread
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8, 9, 10];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
```js
```
```js
//rest
function add(a, b, c) {
  return a + b + c;
}

const arr = [1, 2, 3];
console.log(add(...arr)); // 6
```

```js
//rest
function add(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
```

---
Destructuring

```js
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```
```js
{a, b} = {a: 1, b: 2};
console.log(a); // 1
console.log(b); // 2
```

---
Reference and primitive types

```js
//primitive types
const a = 10;
const b = a;
console.log(a, b); // 10 10
a = 20;
console.log(a, b); // 20 10
// boolean, null, undefined, string, number, symbol
```
```js
//reference types
const a = {name: 'John', age: 30};
const b = a;
console.log(a, b); // {name: 'John', age: 30} {name: 'John', age: 30}
a.age = 40;
console.log(a, b); // {name: 'John', age: 40} {name: 'John', age: 40}
// arrays, objects, functions
```

---
Array methods

```js
const arr = [1, 2, 3, 4, 5];
```
```js
//forEach
arr.forEach((num) => {
  console.log(num);
});
// 1
// 2
```
```js
//map
const arr2 = arr.map((num) => {
  return num * 2;
});
console.log(arr2); // [2, 4, 6, 8, 10]
```
```js
//filter
const arr2 = arr.filter((num) => {
  return num > 3;
});
console.log(arr2); // [4, 5]
```
```js
//reduce
const arr2 = arr.reduce((a, b) => {
  return a + b;
});

console.log(arr2); // 15
```






























