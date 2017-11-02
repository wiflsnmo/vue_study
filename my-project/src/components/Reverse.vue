<template>
<div id="reverse">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转字符串</button>
</div>
</template>

<script>
export default {
  name: 'reverse',
  data () {
    return {
      message: 'test'
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>