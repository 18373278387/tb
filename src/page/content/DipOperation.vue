<template>
  <div>
    <mt-header fixed title="上料操作页面" id="head_title">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
          <van-field v-model="item" name="item" label="物料" placeholder="物料" :rules="[{ required: true, message: '请填写物料' }]" />
          <div style="margin: 16px;">
            <!-- <van-button round block type="info" native-type="submit">提交</van-button> -->

            <van-button square type="info" native-type="submit">确认</van-button>
            <van-button square type="info" @click="allIngredients">是否齐料</van-button>
          </div>
          </van-form>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  import Global from "@/util/Global.js";
  import {
    ajaxPost
  } from "@/util/requestUtil.js";
  import {
    isNum
  } from "@/util/Global.js";
  export default {
    data() {
      return {
        item: ''
      }
    },
    methods: {
      onSubmit(values) {
        var param = new Object();
        param.site = this.$route.query.globalSite.toUpperCase();
        param.shop_order = this.$route.query.SHOP_ORDER.toUpperCase();
        param.resrce = this.$route.query.RESRCE.toUpperCase();
        param.cardid = this.$route.query.CARDID.toUpperCase();
        var temp = values.item.split(",");
        if (temp.length == 1) {
          temp = values.item.split(",");
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
          return false;
        }

        if (isNum(param.produced_date)) {
          if (parseInt(param.produced_date) == 0 || isNaN(parseInt(param.produced_date))) {
            Toast("物料编码周期为0或为空！");
            return false;
          }
        }

        if (parseInt(param.qty) == 0 || isNaN(parseInt(param.qty))) {
          Toast("物料编码数量为0或为空！");
          return false;
        }

        if (param.item.length != 9) {
          Toast("物料编码位数不正确！");
          return false;
        }

        if (param.providerid.indexOf("-") == -1 || param.providerid.indexOf("-") + 1 == param.providerid.length) {
          Toast("唯一码格式不正确或唯一码为空！");
          return false;
        }

        if (!param.produced_date || param.produced_date == 'N/A') {
          Toast("物料编码生产周期不能为空！");
          return false;
        }
        if (!this.isInt(param.qty) || isNaN(param.qty)) {
          Toast("物料编码数量不为大于0的数字或为空！");
          return false;
        }

        var json = JSON.stringify(param);
        var url = Global.ctx + "/tb/pda_sl/dip_slot";
        var dip_slot_result = ajaxPost(url, "json", {
          operation: this.$route.query.operation,
          slot: json
        }, false);

        if (dip_slot_result != "网络异常，请稍后再试，如有问题，请联系管理员处理！") {
          Toast(dip_slot_result.message);
        } else {
          Toast(dip_slot_result);
        }
      },
      isInt(value) {
        var reg = /^[1-9]\d*$/;
        return reg.test(value);
      },
      allIngredients() {
        var site = this.$route.query.globalSite.toUpperCase();
        var shop_order = this.$route.query.SHOP_ORDER.toUpperCase();
        var resrce = this.$route.query.RESRCE.toUpperCase();
        var url = Global.ctx + "/tb/pda_sl/dip_ql";
        var dip_ql_result = ajaxPost(url, "json", {
          site: site,
          shop_order: shop_order,
          resrce: resrce
        }, false);
      }
    }
  }
</script>

<style>
</style>
