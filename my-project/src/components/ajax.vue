
<template>
<div id="ajax">
    <loop></loop>
    <p>{{message}}</p>
    <!-- <ul>
      <li v-for="article in articles">
        {{article.title}}
      </li>
    </ul> -->
</div>
</template>


<script>
import Loop from '@/components/Loop'

export default {
  name: 'ajax',
  components: { Loop },
  data () {
    return {
      message: '',
      articles: []
    }
  },
  created: function () {
    this.$http.jsonp('http://localhost/test_json/text.php?flag=showmessage&limit=2&offset=6&find=', {}, {
      headers: {
      },
      emulateJSON: true
    }).then(function (response) {
      // 这里是处理正确的回调
      console.log(response)
      this.message = response.data.message
      // this.articles = response.data["subjects"] 也可以
    },
    function (response) {
      // 这里是处理错误的回调
      this.message = 'error'
      console.log(response)
    })
  }
}
</script>