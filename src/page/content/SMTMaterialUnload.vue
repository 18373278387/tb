<template>
  <div>
    <mt-header fixed title="SMT物料卸载">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
        <van-field label="卸载类型" v-model="unloadtype" name = "unloadtype"  is-link @focus="showchoice_unloadtype=true"/>
        <van-action-sheet v-model="showchoice_unloadtype" :actions="actions_unloadtype" @select="onSelect_unloadtype" description="卸载类型选项"/>
          <van-field v-model="shoporder" name="shoporder" label="工单" placeholder="工单" :rules="[{ required: true, message: '请填写工单' }]" />
           <van-field v-model="resrce" name="resrce" label="资源" placeholder="资源" :rules="[{ required: true, message: '请填写资源' }]" />
           <van-field label="安装面" v-model="azm" name = "azm"  is-link @focus="showchoice=true"/>
           <van-action-sheet v-model="showchoice" :actions="actions" @select="onSelect" description="安装面选项"/>
            <van-field v-model="slot" name="slot" label="站位" placeholder="站位"  />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">卸载</van-button>
          </div>
          </van-form>

  </div>
</template>





<script>
  export default {
    data() {
      return {
       shoporder:'',
       unloadtype:'',
       resrce:'',
       slot:'',
       azm:'',
       showchoice:false,
       showchoice_unloadtype:false,
       actions:[{name:'A'},{name:'B'}],
       actions_unloadtype:[{name:'全部卸载'},{name:'单个卸载'}]
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
      onSelect(item) {
        this.showchoice = false;
        this.azm = item.name;
      },
      onSelect_unloadtype(item) {
        this.showchoice_unloadtype = false;
        this.unloadtype = item.name;
      }
    }
  }
</script>

<style>
</style>
