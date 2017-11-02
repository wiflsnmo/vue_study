
<template>
<div id="loop">
<ul>


<li v-for='site in sites'>{{ site.name }}</li>


</ul>
</div>
</template>


<script>
export default {
  name: 'loop',
  data () {
    return {
      sites: [
        { name: 'Baidu' },
        { name: 'Google' },
        { name: 'Taobao' }
      ]
    }
  }
}
</script>