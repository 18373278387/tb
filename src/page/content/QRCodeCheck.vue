<template>
  <div>
    <mt-header fixed title="二维码校验">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
          <van-field v-model="item" name="item" label="物料" placeholder="物料" :rules="[{ required: true, message: '请填写物料' }]" />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
          </van-form>
  </div>
</template>

<script>
   import { Toast } from 'vant';
  export default {
    data() {
      return {
        item: ''
      }
    },
    methods: {
      onSubmit(values) {
        console.log('onSubmit',values.item)
        var vld = true;
        var param = new Object();
        let temp = [];
        temp = (values.item||'').split(',');
        if (temp.length == 1) {
          temp = values.item.split("，");
        }
        if (temp.length == 4) {
          param.item = temp[0].toUpperCase();
          param.providerid = temp[1].toUpperCase();
          param.produced_date = temp[2].toUpperCase();
          param.address = temp[3].toUpperCase();
          param.qty = "0";
        } else if (temp.length == 5) {
          param.item = temp[0].toUpperCase();
          param.providerid = temp[1].toUpperCase();
          param.produced_date = temp[2].toUpperCase();
          param.address = temp[3].toUpperCase();
          if (temp[4] != null && temp[4] != '') {
            param.qty = temp[4].toUpperCase();
          } else {
            param.qty = "0";
          }

        } else if (temp.length > 5) {
          param.item = temp[0].toUpperCase();
          param.providerid = temp[1].toUpperCase();
          param.produced_date = temp[2].toUpperCase();
          param.address = temp[3].toUpperCase();
          if (temp[4] != null && temp[4] != '') {
            param.qty = temp[4].toUpperCase();
          } else {
            param.qty = "0";
          }
          param.gysitem = temp[5].toUpperCase();
        } else {
          Toast("物料编码格式不正确！");
          vld = false;
        }
        if (values.item.length != 9) {
          Toast("物料编码位数不正确!");
          vld = false;
          return false;
        }
        if (param.providerid.indexOf("-") == -1 || param.providerid.indexOf("-") + 1 == param.providerid.length) {
          Toast("唯一码格式不正确或唯一码为空!");
          vld = false;
        }

        /* if (!param.produced_date) {
          Toast("物料编码生产周期不能为空！");
          vld = false;
        }

        if (!this.isInt(param.qty) || this.isNaN(param.qty)) {
          Toast("物料编码数量不为大于0的数字或为空！");
          vld = false;
        }
        if (vld) {
            Toast("格式正确！");
        } */

      },
      isInt(value) {
        var reg = /^[1-9]\d*$/;
        return reg.test(value);
      }
    }
  }
</script>

<style>
</style>
