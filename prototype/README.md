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
**Instanceof运算符的第一个变量是一个对象，暂时称为A；第二个变量一般是一个函数，暂时称为B.**
**Instanceof的判断队则是：沿着A的`__proto__`这条线来找，同时沿着B的`prototype`这条线来找，如果两条线能找到同一个引用，即同一个对象，那么就返回true。如果找到终点还未重合，则返回false。**
![Follow TimRChen](https://raw.githubusercontent.com/TimRChen/photoRepo/master/prototype5.png)
> 总结
![Follow TimRChen](https://raw.githubusercontent.com/TimRChen/photoRepo/master/prototypeSum.png)
## 继承
>   [深入理解js继承](http://www.cnblogs.com/wangfupeng1988/p/3979985.html)
*   **hasOwnProperty**
**如何区分一个属性到底是基本的还是从原型中找到的呢？大家可能都知道答案了——hasOwnProperty，特别是在for…in…循环中，一定要注意。**
*   **原型的灵活性**
>   [原型的灵活性](http://www.cnblogs.com/wangfupeng1988/p/3980065.html)
**ps:如果你要添加内置方法的原型属性，最好做一步判断，如果该属性不存在，则添加。如果本来就存在，就没必要再添加了。**

## 执行上下文
>   [执行上下文——上](http://www.cnblogs.com/wangfupeng1988/p/3986420.html)
*   我们总结一下，在“准备工作”中完成了哪些工作:
    *   变量、函数表达式——>变量声明，默认赋值为undefined
    *   this——>赋值
    *   函数声明——>赋值
这三种数据的准备情况我们称之为`执行上下文`或者`执行上下文环境`
>   [执行上下文——下](http://www.cnblogs.com/wangfupeng1988/p/3987563.html)
*   **给执行上下文环境下一个通俗的定义: 在执行代码之前，把将要用到的所有的变量都事先拿出来，有的直接赋值了，有的先用undefined占个空。**

## this对象
>   [this](http://www.cnblogs.com/wangfupeng1988/p/3988422.html)
*   一句话: **谁调用的函数，this就指向谁**
>   [this补充](http://www.cnblogs.com/wangfupeng1988/p/3996037.html)

## 执行上下文栈
>   [执行上下文栈](http://www.cnblogs.com/wangfupeng1988/p/3989357.html)
*   处于活动状态的执行上下文环境只有一个。其实这是一个压栈出栈的过程——执行上下文栈



## closure 闭包
