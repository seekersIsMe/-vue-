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
  </div>
</template>

<script>
import sole_ from './slot';
export default {
  components: {
    sole_
  },
  name: 'HelloWorld',
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
