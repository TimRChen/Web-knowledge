## Ajax
#### 封装 @TimRChen
#### 用途: 学习

## 形式
*   使用ES6 Class语法对ajax方法进行封装
*   使用Promise对象对请求的数据进行回调传值
    *   增加错误捕捉
    *   完善回调处理流程，较之前相比更加简洁

## 使用
    首先实例化Ajax类，let ajax = new Ajax() 即可。Ajax类中没有定义静态方法。子类可继承。

## API
| 名称 | 调用方法 | 备注 |
| ---- | ------- | ---- |
| send | new Ajax().send() | 参数有`method` `url` `async` `callback` `data` |
| callback | (resData) => { console.log(resData) } | 参数为`responseText`值，可指定任意形参 | 
|调用形式: new Ajax().send(method, url, async, callback, data)| :---: | :---: |
