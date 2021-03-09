<template>
  <div>
    <mt-header fixed title="SMT PDA上料">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
          <van-field v-model="shoporder" name="shoporder" label="工单" placeholder="工单" :rules="[{ required: true, message: '请填写工单' }]" />
          <van-field v-model="resrce" name="resrce" label="资源" placeholder="资源" :rules="[{ required: true, message: '请填写资源' }]" />
          <van-field v-model="tl" name="tl" label="套料" placeholder="套料" :rules="[{ required: true, message: '请填写套料' }]" />
          <van-field v-model="cardid" name="cardid" label="工号" placeholder="工号" :rules="[{ required: true, message: '请填写工号' }]" />
          <van-field v-model="first_resrce" name="first_resrce" label="首站资源" placeholder="首站资源" />
          <van-field v-model="sop_version" name="sop_version" label="SOP版本" placeholder="SOP版本" />
          <van-field label="安装面" v-model="azm" name="azm" is-link @focus="showchoice=true" />
          <van-action-sheet v-model="showchoice" :actions="actions" @select="onSelect" description="安装面选项" />

          <van-field label="外转物料" v-model="is_out_item" name="is_out_item" is-link @focus="showchoice_is_out_item=true" />
          <van-action-sheet v-model="showchoice_is_out_item" :actions="actions_is_out_item" @select="onSelect_is_out_item"
            description="外转物料选项" />

          <van-field label="是否扫描飞达" v-model="is_scan_fd" name="is_scan_fd" is-link @focus="showchoice_is_scan_fd=true" />
          <van-action-sheet v-model="showchoice_is_scan_fd" :actions="actions_is_scan_fd" @select="onSelect_is_scan_fd"
            description="外转物料选项" />

          <div style="margin: 16px;">
            <van-button square type="info" native-type="submit">上料</van-button>
              <van-button square type="info" @click="batchCheck">批次核对</van-button>
            <van-button square type="info" @click="proofread">二维码校对</van-button>
          </div>
          <div style="margin: 16px;">
            <van-button square type="info" @click="search">查询</van-button>
              <van-button square type="info" @click="feederReplace">更换飞达</van-button>
            <van-button square type="info" @click="materialSharing">物料共用</van-button>
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
        resrce: '',
        cardid: '',
        tl: '',
        first_resrce: '',
        sop_version: '',
        azm: '',
        is_out_item: '',
        is_scan_fd: '',
        show: false,
        showchoice: false,
        showchoice_is_out_item: false,
        showchoice_is_scan_fd: false,
        actions: [{
          name: 'A'
        }, {
          name: 'B'
        }],
        actions_is_out_item: [{
          name: '是'
        }, {
          name: '否'
        }],
        actions_is_scan_fd: [{
          name: '是'
        }, {
          name: '否'
        }]
      };
    },
    methods: {
      onSubmit(values) {
         this.feeding(values);
      },
      onCancel() {
        alert('取消');
      },
      onSelect(item) {
        this.showchoice = false;
        this.azm = item.name;
      },
      onSelect_is_out_item(item) {
        this.showchoice_is_out_item = false;
        this.is_out_item = item.name;
      },
      onSelect_is_scan_fd(item) {
        this.showchoice_is_scan_fd = false;
        this.is_scan_fd = item.name;
      },
      feeding(values) {
        //上料
        var url = Global.ctx + "/tb/pda_sl/saveShopOrderBom";
        var allExist = false;
        var saveShopOrderBom = ajaxGet(url, "json", {
          shop_order: values.shoporder,
          resrce: values.resrce,
          azm: values.azm,
          tl: values.tl,
          type: 'smt',
          site: this.$route.query.globalSite
        }, false);
        if (saveShopOrderBom != "网络异常，请稍后再试，如有问题，请联系管理员处理！") {
          if (saveShopOrderBom.status == "Y") {
                    var url_shopOrderAndResrce= Global.ctx + "/tb/pda_sl/valid_shopOrderAndResrce";
                    var resrce =  values.resrce+","+values.first_resrce;
                    var shopOrderAndResrce = ajaxGet(url_shopOrderAndResrce, "json", {
                      shop_order: values.shoporder,
                      resrce:values.resrce,
                      sop_version: values.sop_version,
                      site: this.$route.query.globalSite
                    }, false);
                    if(shopOrderAndResrce == "网络异常，请稍后再试，如有问题，请联系管理员处理！"){
                       Toast(shopOrderAndResrce);
                    }else{
                       if(shopOrderAndResrce.status == "N"){
                          Toast(shopOrderAndResrce.message);
                       }else{
                            this.$router.push({path:'/SmtOperation_sl',query:{globalSite:this.$route.query.globalSite,SHOP_ORDER:values.shoporder,RESRCE:values.resrce,CARDID:values.cardid,azm:values.azm,
                            operation:'sl',is_out_item:values.is_out_item,is_scan_fd:values.is_scan_fd,tl:values.tl,first_resrce:values.first_resrce,sop_version:values.sop_version}});
                       }
                    }


          } else {
            Toast(saveShopOrderBom.message);
          }
        }else{
          Toast(saveShopOrderBom);
        }
      },
      proofread(){
         this.$router.push({path:'/Proofread',query:{globalSite:this.$route.query.globalSite}});
      },
      batchCheck(){
          this.$router.push({path:'/BatchCheck',query:{globalSite:this.$route.query.globalSite}});
      },
      feederReplace(){
          this.$router.push({path:'/FeederReplace',query:{globalSite:this.$route.query.globalSite}});
      },
      materialSharing(){
          this.$router.push({path:'/MaterialSharing',query:{globalSite:this.$route.query.globalSite}});
      },
      search(){
          this.$router.push({path:'/Search',query:{globalSite:this.$route.query.globalSite}});
      }


    }

  };
</script>

<style>
</style>
