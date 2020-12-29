<template>
  <div class='search_body'>
      <div class="search_input">
          <div class="search_input_wrapper">
              <i class="iconfont icon-sousuo"></i>
              <input type="text" name="" id="" v-model="message">
          </div>
      </div>
      <div class="search_result">
          <h3>电影/电视剧/综艺</h3>
          <ul>
              <!-- <li>
                  <div class="img">
                      <img src="/images/movie_1.jpg" alt="">
                  </div>
                  <div class="info">
                      <p><span>无名之辈</span><span>8.5</span></p>
                      <p>A Cool Fish</p>
                      <p>剧情，喜剧，犯罪</p>
                      <p>2021.2.3</p>
                  </div>
              </li> -->
              <li v-for="item in moviesList" :key="item.id">
                  <div class="img">
                      <img :src="item.img|setWH('128.180')" alt="">
                  </div>
                  <div class="info">
                      <p><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
                      <p>{{item.enm}}</p>
                      <p>{{item.cat}}</p>
                      <p>{{item.rt}}</p>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
  export default {
      name:'Search',
      data(){
          return {
              message:'',
              moviesList:[]
          }
      },
      methods:{
          //VUE axios请求频繁时，取消上一次请求
          cancelRequest(){
              if(typeof this.source==='function'){
                  this.source('终止请求')
              }
          }
      },
    // 这里要用watch监听搜索框里的变化，对数据的渲染做异步的操作
    // 所以不能使用mounted，但比computed计算属性好
    // 对于搜素框快速输入时要做 “防抖”的策略，只对输入的最后一次进行请求触发，之前的输入进行清除。避免输入还没结束时，就axios请求多次
    /* 解决：
            1.设置clearTimeout和setTimeout
            2.axios自带防抖功能
    */
    watch:{
        message(newVal){
            var that = this;

            // 在里面要调用取消请求的方法
            this.cancelRequest()

            // 在这里axios请求 做字符串newVal拼接
            this.axios.get('/api/searchList?cityId=10&kw='+newVal,{
                //在axios第二个参数里配置防抖
                cancelToken:new this.axios.CancelToken(function excutor(c){
                    //this指向的问题
                    that.source=c;
                })
            }).then((res)=>{
                var msg=res.data.msg
                var movies = res.data.data.movies
                if(msg&&movies){
                    this.moviesList=res.data.data.movies.list
                }
            }).catch((err)=>{
                if(this.axios.isCancel(err)){
                    console.log('Request canceled',err.message);//请求若被取消，这里是返回取消message
                }else{
                    console.log(err)
                }
            })
        }
    }

}
</script>

<style lang='scss' scoped>

#content .search_body{ flex:1; overflow:auto;}
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
 
.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}

.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
.search_body .search_result .img{ width: 60px; float:left; }
.search_body .search_result .img img{ width: 100%; }
.search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
</style>