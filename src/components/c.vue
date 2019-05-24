<template>
  <div class="wrapper">
   <!-- <img src="https://www.baidu.com/img/bd_logo1.png?where=super" alt=""> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login () {
      console.log('点击了');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
    width: 200px;
    height: 200px;
    background: red;
    margin-top: 20px;
    color: white;
}
</style>
