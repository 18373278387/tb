<template>
  <div id="app2">
    <mt-header fixed title="站点选择">
      <router-link to="/" slot="left" class="router-link-active">

        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
          <van-field label="站点" v-model="site" name="site" is-link @focus="showchoice=true" />
          <van-action-sheet v-model="showchoice" :actions="actions" @select="onSelect" description="站点选项" />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
          </van-form>
  </div>
</template>

<script>
  import Global from "../../util/Global.js"
  export default {
    data() {
      return {
        site: '',
        showchoice: false,
        actions: []
      };
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
        this.$router.push({path:'/',query:{globalSite:values.site}});
        //this.$router.push('/');
      },
      onSelect(item) {
        this.showchoice = false;
        this.site = item.name;
      },
    },
    mounted() {
      let _this = this;
      var a = [];
      var url = Global.mes+"/manufacturing/MobileServlet";
      this.$axios.get(url, {
        params: {
          methodType: 'querySite'
        }
      }).then(function(response) {
        if (response.data.status == 'Y') {
            var result =  response.data.result;
            for(var i = 0;i<result.length;i++){
              if(result[i].value != "*"){
               a.push({name:result[i].value});
               }
            }
        }
      }).catch(function(error) {
        console.log(error);
      });
      this.actions = a;
      //this.actions = [{name:1},{name:2}];
    }
  };
</script>

<style>
</style>
