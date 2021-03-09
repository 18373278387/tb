<template>
  <div>
    <mt-header fixed title="SMT工单下达">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
          <van-field v-model="shoporder" name="shoporder" label="工单" placeholder="工单" :rules="[{ required: true, message: '请填写工单' }]" />
          <van-field v-model="first_resrce" name="first_resrce" label="首站资源" placeholder="首站资源" :rules="[{ required: true, message: '请填写首站资源' }]" />
          <van-field v-model="deduct_resrce" name="deduct_resrce" label="扣料资源" placeholder="扣料资源" :rules="[{ required: true, message: '请填写扣料资源' }]" />
          <van-field v-model="sop_version" name="sop_version" label="SOP版本" placeholder="SOP版本" />
          <van-field label="套料" v-model="tl" name="tl" is-link @focus="showchoice_tl=true" />
          <van-action-sheet v-model="showchoice_tl" :actions="actions_tl" @select="onSelect_tl" description="套料选项" />
          <van-field label="安装面" v-model="azm" name="azm" is-link @focus="showchoice=true" />
          <van-action-sheet v-model="showchoice" :actions="actions" @select="onSelect" description="安装面选项" />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
          </van-form>
  </div>
</template>

<script>
  import Global from "@/util/Global.js";
  import { Toast } from 'vant';
  import {
    ajaxGet
  } from "@/util/requestUtil.js";
  export default {
    data() {
      return {
        shoporder: '',
        first_resrce: '',
        deduct_resrce: '',
        sop_version: '',
        azm: '',
        tl: '',
        showchoice: false,
        showchoice_tl: false,
        actions: [{
          name: 'A'
        }, {
          name: 'B'
        }],
        actions_tl: [{
          name: '1'
        }, {
          name: '2'
        }, {
          name: '3'
        }, {
          name: '4'
        }]
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
        var shoporder = values.shoporder;
        var first_resrce = values.first_resrce.toUpperCase();
        var deduct_resrce = values.deduct_resrce.toUpperCase();
        var azm = values.azm;
        var tl = values.tl;
        var sop_version = values.sop_version;
        var url = Global.ctx + "/tb/pda_sl/valid_shopOrderAndResrce";
        var valid_shopOrderAndResrce = ajaxGet(url, "json", {
          shop_order:shoporder,
          resrce: first_resrce + "," + deduct_resrce,
          sop_version: sop_version,
          site: this.$route.query.globalSite
        }, false);
        if(valid_shopOrderAndResrce != "网络异常，请稍后再试，如有问题，请联系管理员处理！"){
        if(valid_shopOrderAndResrce.status == "Y"){
          this.shopOrderRelease(shoporder,first_resrce,deduct_resrce,azm,tl,sop_version,'release');
        }else{
          Toast(valid_shopOrderAndResrce.message);
        }
        }else{
           Toast(valid_shopOrderAndResrce);
        }
      },
      onSelect(item) {
        this.showchoice = false;
        this.azm = item.name;
      },
      onSelect_tl(item) {
        this.showchoice_tl = false;
        this.tl = item.name;
      },
      shopOrderRelease(shop_order,first_resrce,deduct_resrce,azm,tl,sop_version,operation){
        var url = ctx + "/tb/pda_sl/shopOrderRelease";
        var result = ajaxGet(url, "json", {
          shop_order:shop_order,
          first_resrce:first_resrce,
          deduct_resrce: deduct_resrce,
          azm:azm,
          tl:tl,
          sop_version:sop_version,
          operation:operation,
          type:'smt',
          site: this.$route.query.globalSite
        }, false);
        if(result  != "网络异常，请稍后再试，如有问题，请联系管理员处理！"){
           if (result.status == "Y") {
             Toast(shop_order+"下单成功");
           }else{
             Toast(result.message);
           }
        }else{
          Toast(result);
        }
      }
    }
  }
</script>

<style>
</style>
