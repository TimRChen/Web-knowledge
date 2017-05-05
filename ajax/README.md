## Ajax
#### 封装 @TimRChen
#### 用途: 学习

## 形式
*   使用ES6 Class语法对ajax方法进行封装
*   使用Promise对象对请求的数据进行回调传值
    *   增加错误捕捉
    *   完善回调处理流程，较之前相比更加简洁

## 使用
    首先实例化Ajax类，let ajax = new Ajax() ，Ajax类中没有定义静态方法。子类可继承。
    eg: 
```js
    let ajax = new Ajax();
    const options = {
        type: 'get',
        url: 'someurl',
        async: true,
        dataType: 'json',
        questring: 'name=TimRChen'
    };
    ajax.send(options).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    };
```

## API
名称 | 调用方法 | 备注
---- | ------- | ----
send | new Ajax().send() | 参数为`options`对象


## options
Name | Type | Others
---- | ------ | ------
type | `get` & `post` | 
url  | `String` |
async| `true` & `false` | 
dataType | `json` | 
questring| `queryString` | 查询字符串，用于表单发送ajax需求


