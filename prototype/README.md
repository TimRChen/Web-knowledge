## proto & closure
#### @TimRChen
#### 用途: 学习

## prototype
*   case 1: define function prototype method and attributes
```js
let test = () => {
    // ..nothing
};

test.prototype.name = 'timrchen';

test.prototype.getName = () => {
    return 'timrchen';
};
```
*   case 2: extends prototype
```js
// extends case 1
let tim = new test();
console.log(tim);
// __proto__: Object
//     name: 'timrchen',
//     getName: (),
//     constructor: test(),
//     __proto__: Object

console.log(test.prototype);
// Object
//     name: 'timrchen',
//     getName: (),
//     constructor: test(),
//     __proto__: Object
```
*   so, we could conclude this:
```js
test.prototype === tim.__proto__
```
*   tim对象的__proto__又称为“隐式原型”
*   **每个函数`function`都有一个`prototype`,每个对象都有一个`__proto__`,即`隐式原型`**
*   **每个对象都有一个`__proto__`属性，指向创建该对象的函数的`prototype`**
*   

## closure
