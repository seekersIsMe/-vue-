<script>
import _ from 'lodash'
export default {
    props: {
        time: Number,
        eventNameList: Array
    },
    abstract: true,
    data() {
        return {
            originMap: {},
            throttledMap:{}
        }
    },
    render (h) {
        console.log('渲染开始');
        let vnode = this.$slots.default[0];
        this.eventNameList.forEach(element => {
        let targetEvent = vnode.data.on[element]
            if (targetEvent&& this.originMap[element]&&this.throttledMap[element]) {
                vnode.data.on[element] = this.throttledMap[element]
            } else if(targetEvent) {
                this.originMap[element] = targetEvent;
                this.throttledMap[element] = _.throttle(targetEvent,this.time);
                vnode.data.on[element] = _.throttle(targetEvent,this.time);
            }
        });
        return vnode;
    },
    mounted() {
        console.log(this.$slots.default[0])
    }
}
</script>

