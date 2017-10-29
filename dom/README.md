## DOM
*   W3C 标准一部分

### 操作DOM常用方法

-   方法是我们可以在节点（HTML 元素）上执行的动作。

| 方法 | 描述 |
|--- | --- |
| getElementById() | 返回带有指定 ID 的元素 |
| getElementsByTagName() | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组） |
| getElementsByClassName() | 返回包含带有指定类名的所有元素的节点列表 |
| appendChild() | 把新的子节点添加到指定节点 |
| removeChild() | 删除子节点 |
| replaceChild() | 替换子节点 |
| insertBefore() | 在指定的子节点前面插入新的子节点 |
| createAttribute() | 创建属性节点 |
| createElement() | 创建元素节点 |
| createTextNode() | 创建文本节点 |
| getAttribute() | 返回指定的属性值 |
| setAttribute() | 把指定属性设置或修改为指定的值 |


### DOM 属性

-   属性是节点（HTML 元素）的值，您能够获取或设置。

>   innerHTML

获取元素内容的最简单方法是使用 innerHTML 属性。

innerHTML 属性对于获取或替换 HTML 元素的内容很有用。

>   nodeType

nodeType 属性返回节点的类型。nodeType 是只读的。

| 元素类型 | NodeType |
| --- | --- |
| 元素 | 	1 |
| 属性 | 2 |
| 文本 | 3 |
| 注释 | 8 |
| 文档 | 9 |
