<template>
  <div>
    <mt-header fixed title="DIP工单下达">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
          <van-field v-model="shoporder" name="shoporder" label="工单" placeholder="工单" :rules="[{ required: true, message: '请填写工单' }]" />
          <van-field v-model="first_resrce" name="first_resrce" label="首站资源" placeholder="首站资源" :rules="[{ required: true, message: '请填写首站资源' }]" />
          <van-field v-model="deduct_resrce" name="deduct_resrce" label="扣料资源" placeholder="扣料资源" :rules="[{ required: true, message: '请填写扣料资源' }]" />
          <van-field v-model="sop_version" name="sop_version" label="SOP版本" placeholder="SOP版本" />
          <van-field v-model="sop_item" name="sop_item" label="SOP编码" placeholder="SOP编码" />
           <van-field label="是否校验齐料" v-model="is_check" name="is_check" is-link @focus="is_check_select=true" />
            <van-action-sheet v-model="is_check_select" :actions="actions" @select="onSelect" description="是否校验齐料" />
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
        shoporder: '',
        first_resrce: '',
        deduct_resrce: '',
        sop_version: '',
        sop_item: '',
        is_check:'',
        is_check_select:false,
        actions:[{name:'是'},{name:''}]
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
      onSelect(item){
        this.is_check_select = false;
        this.is_check = item.name;
      }

    }
  }
</script>

<style>
</style>
