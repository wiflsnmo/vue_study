<template>
<div id="test">
    <p>{{ message }}</p>
    <div v-html="htmltest"></div>
</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      message: '文本',
      htmltest: '<p>html</p>'
    }
  }
}
</script>