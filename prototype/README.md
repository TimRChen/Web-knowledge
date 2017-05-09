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
*   **ps:如果你要添加内置方法的原型属性，最好做一步判断，如果该属性不存在，则添加。如果本来就存在，就没必要再添加了。**

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
>   [执行上下文栈——很好的一片解读文](http://www.cnblogs.com/wangfupeng1988/p/3989357.html)
*   处于活动状态的执行上下文环境只有一个。其实这是一个压栈出栈的过程——执行上下文栈

## 作用域
>   [作用域](http://www.cnblogs.com/wangfupeng1988/p/3991151.html)
*   javascript除了全局作用域之外，只有函数可以创建的作用域。
*   作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突

## 作用域 & 上下文环境
>   [作用域 & 上下文环境](http://www.cnblogs.com/wangfupeng1988/p/3991995.html)
*   作用域只是一个“地盘”，一个抽象的概念，其中没有变量。要通过作用域对应的执行上下文环境来获取变量的值。同一个作用域下，不同的调用会产生不同的执行上下文环境，继而产生不同的变量的值。所以，作用域中变量的值是在执行过程中产生的确定的，而作用域却是在函数创建时就确定了

## 自由变量 & 作用域链(重点)
>   [自由变量 & 作用域链](http://www.cnblogs.com/wangfupeng1988/p/3992795.html)
```js
var x = 10;
function fn() {
    console.log(x);
}

function show(f) {
    var x = 20;
    (function() {
        f();    // 10，而不是20，想想为什么
    })();
}

show(fn);
```
>   对于上述代码，在fn函数中，取自由变量x的值时，要到哪个作用域中取？
*   **要到`创建`这个函数的那个作用域中取值——注意是`创建`，而不是`调用`，切记切记——其实这就是所谓的`静态作用域`。**

## closure 闭包
>   [closure 闭包](http://www.cnblogs.com/wangfupeng1988/p/3994065.html)
*   有些情况下，函数调用完成之后，其执行上下文环境不会接着被销毁。这就是需要理解闭包的核心内容。
## 闭包有哪些应用？
>   [闭包的应用场景](http://www.cnblogs.com/star-studio/archive/2011/06/22/2086493.html)
1.  使用闭包代替全局变量
2.  函数外或在其他函数中访问某一函数内部的参数
3.  在函数执行之前为要执行的函数提供具体参数
4.  在函数执行之前为函数提供只有在函数执行或引用时才能知道的具体参数
5.  为节点循环绑定click事件，在事件函数中使用当次循环的值或节点，而不是最后一次循环的值或节点
6.  暂停执行
7.  包装相关功能