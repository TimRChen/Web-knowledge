## Front-end 面试点整理
收集整理fe知识点.

## Contents

1. [HTML Questions](#html-questions)
2. [CSS Questions](#css-questions)
3. [JS Questions](#js-questions)
4. [Network Questions](#network-questions)
5. [General Questions](#general-questions)

## The Questions

#### HTML Questions

#### CSS Questions
*   盒模型的了解？

#### JS Questions
*   你对原型链及闭包的理解与应用？
>   http://www.cnblogs.com/wangfupeng1988/p/4001284.html

#### Network Questions
*   **一般来说，为什么多域名指向一个站点会更好？**
>  为什么很多网站的静态资源会使用独立的域名？
http://www.zhihu.com/question/20534662

*  **当你在浏览器地址栏输入一个URL后回车，将会发生的事情？**
>  https://github.com/skyline75489/what-happens-when-zh_CN

*   **请你解释下 javascript 跨域通信？**
>    首先解释下`同源策略` 
https://github.com/qiu-deqing/FE-interview

>    跨域资源共享(CORS)
https://segmentfault.com/a/1190000000718840

符合`同源策略`，需要满足三个条件：
1. 协议相同
2. 域名相同
3. 端口一致

*   跨域通信：js进行DOM操作、通信时如果目标与当前窗口不满足`同源策略`，浏览器为了安全会阻止跨域操作。跨域通信通常有以下方法：
    *   如果是log之类的简单**单项通信**，新建`<img>`,`<script>`,`<link>`,`<iframe>`元素，通过src，href属性设置为目标url。实现跨域请求
    *   如果请求json数据，使用`<script>`进行jsonp请求
    *   现代浏览器中**多窗口通信**使用HTML5规范的`targetWindow.postMessage(data, origin)`; 其中data是需要发送的对象，origin是目标窗口的origin。`window.addEventListener('message', handler, false)`; handler的event.data是postMessage发送来的数据，event.origin是发送窗口的origin，event.source是发送消息的窗口引用
    *   内部服务器代理请求跨域url，然后返回数据
    *   跨域请求数据，现代浏览器可使用HTML5规范的**CORS**功能，只要目标服务器返回HTTP头部`Access-Control-Allow-Origin: `即可像普通ajax一样访问跨域资源



#### General Questions
*   对w3c标准的理解？