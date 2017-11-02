
<template>
<div id="page">
  <div class="form-group">
    <input v-model="findmessage" placeholder="搜索">
    <button v-on:click="loadData(CurrentPage)">Submit</button>
  </div>
  <ul>
    <li v-for='item in items'>{{ item.name }}</li>
  </ul>
  <paginate
    :page-count="20"
    :click-handler="loadData"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'">
  </paginate>
</div>
</template>


<script>
import Paginate from 'vuejs-paginate'

export default {
  name: 'page',
  data () {
    return {
      items: [],
      perpage: 2,
      findmessage: '',
      CurrentPage: 1
    }
  },
  methods: {
    loadData (PageNum) {
      this.CurrentPage = PageNum
      const options = {
        params: {
          find: this.findmessage,
          limit: this.perpage,
          offset: this.perpage * (PageNum - 1),
          emulateJSON: true
          /* additional parameters */
        }
      }
      this.$http.jsonp('http://localhost/test_json/text.php?flag=showmessage', options).then(function (response) {
        // 这里是处理正确的回调
        console.log(response.data.comments)
        this.items = response.data.comments
        // this.articles = response.data["subjects"] 也可以
      },
      function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    }
  },
  created: function () {
    this.loadData(1)
  },
  components: {
    Paginate
  }
}
</script>
