<template>
  <div>
    <mt-header fixed title="物料状态查询">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header>
        <van-form @submit="onSubmit">
        <van-field v-model="gc" name="gc" label="工厂" placeholder="工厂" />
        <van-field v-model="wlbm" name="wlbm" label="物料编码" placeholder="物料编码" />
         <van-field v-model="dqzt" name="dqzt" label="当前状态" placeholder="当前状态" />
          <van-field v-model="yrkp" name="yrkp" label="当前状态已入库批" placeholder="当前状态已入库批" />
           <van-field v-model="djcp" name="djcp" label="待决策批数" placeholder="待决策批数" />
            <van-field v-model="item" name="item" label="物料编码" placeholder="物料编码" :rules="[{ required: true, message: '请填写物料编码' }]"/>
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
             </van-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gc: '',
        wlbm:'',
        dqzt:'',
        yrkp:'',
        djcp:'',
        item:''
      }
    },
   methods: {
     onSubmit(values) {
       console.log('submit', values);
     }
   }
  }
</script>

<style>
</style>
