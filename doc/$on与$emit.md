> 众所周知，`$on`是做事件监听，`$emit`是做事件的派发，但对于`$dispatch` 和 `$broadcast`大家可能就比较陌生了，这对api是vue1.x版本的，在vue2.x里已经被废弃
## `$on`和`$emit`
* $on对于自身触发的事件，也是可以监听的

## `$dispatch` 与 `$broadcast`
* `$dispatch`：用于向上级派发事件，只要是它的父级（一级或多级以上），都可以在组件内通过`$on`监听到
* `$broadcast`: 用于向下级派发事件，只要是它的子组件，都可以在组件内通过`$on`监听到

> 如何通过`$on`和`$emit`来实现`$dispatch`和`$broadcast`,思路大概是，向上递归查找要通信的组件，或者向下，我们将该功能代码提到mixin中，方便各组件复用
```
    // emitter.js
    const broadcast = function(comName,event,data) {
        this.$children.forEach(p =>{
            if(p.$options.name === comName) {
            p.$emit(event, data) 
            } else{
            broadcast.apply(p,comName,event,data)
            }
        })
        }
    methods: {
        /**
        * comName 目标组件
        * event 事件名
        * data 要传的数据
        */
        broadcast(comName,event,data) {
        broadcast.call(this, arguments)
        },
        dispatch (comName,event,data) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;
            // 这里是找最接近的父组件
            while (parent && (!name || name !== componentName)) {
            parent = parent.$parent;

            if (parent) {
            name = parent.$options.name;
            }
            }
            if (parent) {
            parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
    }

```

**使用案例**
```
    // 父组件A，省略部分代码
    <template>
        <button @click="handleClick">触发事件</button>
    </template>
    <script>
    import Emitter from '../mixins/emitter.js';
    
    export default {
        name: 'componentA',
        mixins: [ Emitter ],
        methods: {
        handleClick () {
            this.broadcast('componentB', 'sendMsg', 'Hello 我是父组件A');
        }
        }
    }
    </script>
       // 子组件B，省略部分代码
    <script>
    import Emitter from '../mixins/emitter.js';
    
    export default {
        name: 'componentB',
        mixins: [ Emitter ],
        // 在created或者mounted做事件监听
        created () {
            this.$on('sendMsg', this.showMsg)
        },
        methods: {
            showMsg (data) {
                alert(data)
            }
        }
    }
    </script>
```

## 和原来的api的区别
* 需要额外传入组件的 name 作为第一个参数；
* 无冒泡机制；
* 第三个参数传递的数据，只能是一个（较多时可以传入一个对象），而 Vue.js 1.x 可以传入多个参数，当然，你对 emitter.js 稍作修改，也能支持传入多个参数，只是一般场景传入一个对象足以

