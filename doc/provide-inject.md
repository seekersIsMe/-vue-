# `provide`/`inject`
> 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。
## `provide`
* 在生命周期中顺序
  1. beforeCreate
  2. data
  3. provide
  4. created
  5. mounted
* `provide`可以是一个对象或者是一个返回对象的函数，使用对象模式的时候注意this的指向问题
* `provide`和`inject`数据不是响应的，改变的provide的数据，不会响应到inject注入的值；避免inject修改
* `inject`可以是数组或者对象
* 通常用在数据不怎么变化的地方
* **[详情见官方文档](https://cn.vuejs.org/v2/api/#provide-inject)**
