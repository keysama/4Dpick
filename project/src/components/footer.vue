<template>
  <div class="top">
      <div class="container">
          <div class="row">
                <div class="col-md-4">
                    <div class="facebook">
                        <div class="card d-flex justify-content-left flex-row">
                            <div class="img">
                                <img src="../assets/img/web_head.jpg" alt="">
                            </div>
                            <div style="padding-left:10px">
                                <div class="title">
                                    <a href="https://www.facebook.com/people/Xin-Li/100028314713296" target="view_window">4D pick</a>
                                </div>
                                <div class="func">
                                    <a href="https://www.facebook.com/people/Xin-Li/100028314713296" class="btn btn-sm d-flex align-items-center" target="view_window">
                    
                                        <img src="../assets/img/face_btn.png" alt="" style="width:20px">
                                        <span style="margin-left:5px">Like Page</span>       
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-md-8">
                        <comment></comment>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import comment from './comment.vue';
export default {
  data () {
    return {
      
    }
  },
  components:{
      comment
  }
}
</script>

<style scoped lang="less">
.top{
    margin-top:-20px;
    margin-bottom:40px;
    .container{
        background-color: #fff;
        padding-bottom: 20px;
    } 
}
.facebook{
    width: 300px;
    height: 80px;
    .card{
         padding:5px !important;
        .img{
            max-width: 50px;
            display: flex;
            align-items: center;
        }
        .title{
            font-size: 18px;
        }
        .func{
            background-color: #f5f6f7;
            border:1px solid rgba(0, 0, 0, .12);
        }
    }
}
</style>
