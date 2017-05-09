## proto & closure
#### @TimRChen
#### 用途: 学习

## prototype
*   **case 1**: define function prototype method and attributes
```js
let test = () => {
    // ..nothing
};

test.prototype.name = 'timrchen';

test.prototype.getName = () => {
    return 'timrchen';
};
```

*   **case 2**: extends prototype
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
so, we could conclude this:
```js
test.prototype === tim.__proto__
```
## 函数与对象的关系
1.   tim对象的`__proto__`又称为`隐式原型`
2.   **每个函数`function`都有一个`prototype`,每个对象都有一个`__proto__`,即`隐式原型`**
3.   **每个对象都有一个`__proto__`属性，指向创建该对象的函数的`prototype`**

*   **case 3**: Object.prototype.__proto__
```js
console.log(Object.prototype.__proto__);
//  null
```
**Object.prototype的`__proto__`指向的是`null`，切记！**
![Follow TimRChen](https://raw.githubusercontent.com/TimRChen/photoRepo/master/prototype.png)
```js
Object.__proto__ === Function.prototype
// 下图表示
```
![Follow TimRChen](https://raw.githubusercontent.com/TimRChen/photoRepo/master/prototype1.png)
![Follow TimRChen](https://raw.githubusercontent.com/TimRChen/photoRepo/master/prototype2.png)

```js
Function.prototype.__proto__ === Object.prototype
Object.__proto__.__proto__ === Object.prototype
```
*   **instanceof**
![Follow TimRChen](https://raw.githubusercontent.com/TimRChen/photoRepo/master/prototype4.png)
*   **instanceof原理图**
![Follow TimRChen](https://raw.githubusercontent.com/TimRChen/photoRepo/master/prototype3.png)
## Instanceof运算符的第一个变量是一个对象，暂时称为A；第二个变量一般是一个函数，暂时称为B.
## Instanceof的判断队则是：沿着A的`__proto__`这条线来找，同时沿着B的`prototype`这条线来找，如果两条线能找到同一个引用，即同一个对象，那么就返回true。如果找到终点还未重合，则返回false。
>总结
![Follow TimRChen](https://raw.githubusercontent.com/TimRChen/photoRepo/master/prototypeSum.png)
## closure
