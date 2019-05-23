<template>
  <div id="app">
    <div>{{userName}}</div>
    <button @click="changeName">改变父级依赖属性</button>
    <router-view/>
  </div>
</template>

<script>
import mixin from "./components/emitter";
export default {
  name: "App",
  mixins: [mixin],
  // 要获取prop或者data，就需要是一个函数
  provide() {
    console.log("provide");
    let this_ = this;
    return {
      userName: {
        userName: this_.userName
      }
    };
  },
  // 对象的话就只能是赋予死数据
  // provide: {
  //   userName: {
  //     'userName': 'zhan'
  //   }
  // },
    beforeCreate(){
     document.dispatchEvent(new Event('sketelon-render-event'))
  },
  data() {
    console.log("data");
    return {
      userName: "zhan"
    };
  },
  methods: {
    getUserInfo() {
      console.log("this", this);
      console.log(this.userName);
    },
    changeName() {
      this.userName = "hui";
      this.broadcast("a",'send', '啊哈哈哈哈哈成功了');
    },
    beforeCreate() {
      console.log("beforeCreate");
    },
    created() {
      console.log("created");
    },
    mounted() {
      console.log("mounted");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
