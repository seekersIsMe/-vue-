const broadcast = function(comName,event,data) {
    this.$children.forEach(p =>{
        if(p.$options.name === comName) {
        p.$emit(event, data) 
        } else{
        broadcast.apply(p,comName,event,data)
        }
    })
}
export default {
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
}