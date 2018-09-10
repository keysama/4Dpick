<template>
  <div class="comment">
    <h3 style="margin-bottom:10px">Message Board</h3>
    <ul class="list-group" style="margin-bottom:10px">
      <li class="list-group-item">
        <div class="form-group">
         
          <textarea class="form-control" rows="5" id="comment" style="resize:none" v-model="newComment"></textarea>
          <div class="btn btn-primary float-right" style="margin-top:10px" @click="submit">submit</div>
        </div>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item comment-list" v-for="(item,key) in commentList" :key="key">
        <div class="content">
          {{item.content}}
        </div>
        <div class="infomaition">
          {{item.creater}} -{{item.createTime | timeFilter}}
        </div>
      </li>
    </ul>
    <ul class="pagination" style="margin-top:10px">
      <li class="page-item" v-if="page != 1" @click="prevPage"><span class="page-link" href="#">Previous</span></li>
      <li class="page-item" :class="{'active':page==item}" v-for="(item,key) in pageNum" :key="key" @click="changePage(item)"><span class="page-link">{{item}}</span></li>
      <li class="page-item" v-if="page != pageNum" @click="nextPage"><span class="page-link" href="#">Next</span></li>
    </ul>
  </div>
</template>

<script>
import {getComment,getCommentNum,addComment} from '../api/comment.js';
export default {
  created(){
    this.init();
  },
  methods:{
    async init(){
     let res =await getCommentNum(this.onePageComments);
     if(res.data.state == 0){alert(res.data.text);return};
     this.pageNum = Math.ceil(res.data.body/this.onePageComments);
     let res1 = await getComment(this.page,this.onePageComments);
     if(res1.data.state == 0){alert(res1.data.text);return};
     this.commentList = res1.data.body;

    },
    async submit(){
      if(this.newComment == ''){return};
      let res = await addComment({content:this.newComment});
      if(res.data.state == 0){alert(res.data.text);return};
      this.newComment = '';
      this.init();
    },
    changePage (page){
      this.page = page;
      this.init();
    },
    prevPage (){
      if(this.page<=1){return};
      this.page-=1;
      this.init();
    },
    nextPage (){
      if(this.page>=this.pageNum){return};
      this.page+=1;
      this.init();
    }
  },
  data () {
    return {
      onePageComments:8,
      page:1,
      pageNum:0,
      commentList:[],
      newComment:''
    }
  },
  filters:{
    timeFilter(value){
      var now = new Date(parseInt(value)),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
      return y + "/" + (m < 10 ? "0" + m : m) + "/" + (d < 10 ? "0" + d : d);
    }
  }
}
</script>

<style scoped lang="less">
.comment{
  width: 100%;
  padding:10px;
  .comment-list{
    .content{
      text-indent:2em;
    }
    .infomaition{
      text-align: right;
    }
  }
}

</style>
