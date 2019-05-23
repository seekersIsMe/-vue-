<template>
  <div class="hello">
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    <sole_ :time='2000' :eventNameList="eventNameList">
      <slot name="header">
        <template>
          <button @click='clickSolt'>插槽测试</button>
        </template>
      </slot>
    </sole_>
    <div>{{userName.userName}}</div>
  </div>
</template>

<script>
import mixin from './emitter'
import sole_ from './slot';
export default {
  components: {
    sole_
  },
  mixins: [mixin],
  name: 'a',
  inject: ['userName'],
  beforeCreate(){
     document.dispatchEvent(new Event('sketelon-render-event'))
  },
  created () {
    this.$on('send',(data) => {
      console.log('send', data)
    })
  },
  mounted () {
  },
  data () {
    return {
      count: 0,
      eventNameList: [
        'click'
      ]
    }
  },
  methods: {
    clickSolt() {
      console.log(this.userName);
      this.userName.userName = 'hui';
      console.log(`点击了${this.count++}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
