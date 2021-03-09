<template>

  <div>
    <mt-header fixed title="DIP线PDA上料">
      <router-link to="/" slot="left" class="router-link-active">
        <!-- <mt-button icon="back">返回</mt-button> -->
        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
          <van-field v-model="shoporder" name="shoporder" label="工单" placeholder="工单" :rules="[{ required: true, message: '请填写工单' }]" />
          <van-field v-model="resrce" name="resrce" label="设备" placeholder="设备" :rules="[{ required: true, message: '请填写设备' }]" />
          <van-field v-model="cardid" name="cardid" label="工号" placeholder="工号" :rules="[{ required: true, message: '请填写工号' }]" />
          <div style="margin: 16px;">
            <!-- <van-button round block type="info" native-type="submit">提交</van-button> -->

            <van-button square type="info" native-type="submit">上料</van-button>
            <van-button square type="primary">核对</van-button>
          </div>
          </van-form>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Global from "../../util/Global.js"
  import {
    Toast
  } from 'vant';
  import {
    ajaxGet
  } from "@/util/requestUtil.js";
  Vue.use(Toast);
  export default {
    data() {
      return {
        shoporder: '',
        resrce: '',
        cardid: ''
      };
    },
    methods: {
      onSubmit(values) {
        var url = Global.ctx + "/tb/pda_sl/saveShopOrderBom";
        var shoporder = values.shoporder;
        var resrce = values.resrce;
        var cardid = values.cardid;
        var site = this.$route.query.globalSite;
        console.log('onSubmit',values);
        var saveShopOrderBom = ajaxGet(url, "json", {
          shop_order: shoporder,
          resrce: resrce,
          site: this.$route.query.globalSite,
          type: 'dip'
        }, false);
        if (saveShopOrderBom != "网络异常，请稍后再试，如有问题，请联系管理员处理！") {
          if (saveShopOrderBom.status == "Y") {
               this.shopOrderAndResrce(shoporder,resrce,cardid);
          }else{
            Toast(saveShopOrderBom.message);
          }
        } else {
          Toast(saveShopOrderBom);
        }
      },
      shopOrderAndResrce(shoporder,resrce,cardid){
        var url = Global.ctx + "/tb/pda_sl/valid_shopOrderAndResrce";
        var valid_shopOrderAndResrce = ajaxGet(url, "json", {
          shop_order: shoporder,
          resrce: resrce,
          site: this.$route.query.globalSite,
        }, false);
        if(valid_shopOrderAndResrce != "网络异常，请稍后再试，如有问题，请联系管理员处理！"){
           if(valid_shopOrderAndResrce.status == "Y"){
                this.$router.push({path:'/DipOperation',query:{globalSite:this.$route.query.globalSite,SHOP_ORDER:shoporder,RESRCE:resrce,CARDID:cardid,operation:'sl'}});
           }else{
             Toast(valid_shopOrderAndResrce.message);
           }
        }else{
          Toast(valid_shopOrderAndResrce);
        }
      }
    },
    mounted: function() {}
  };
</script>

<style>
  .router-link-active {
    text-decoration: none;
  }
</style>
