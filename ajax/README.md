## Ajax
    封装 `@TimRChen`
    用途: 学习

## 形式
*   使用ES6 Class语法对ajax方法进行封装
*   调用时直接引入ajax.js文件，可以使用CMD规范，亦可使用ES6 import方法

## 使用
    首先实例化Ajax类，let ajax = new Ajax() 即可。Ajax类中没有定义静态方法。子类可继承。

## API
| 名称 | 调用方法 | 备注 |
| ---- | ------- | ---- |
| send | new Ajax().send() | 参数有`method` `url` `async` `callback` `data` |
| callback | (resData) => { console.log(resData) } | 参数为`responseText`值，可指定任意形参 | 
|调用形式: new Ajax().send(method, url, async, callback, data)|
