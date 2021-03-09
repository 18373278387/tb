<template>
  <div>
    <mt-header fixed title="上料操作界面">
      <router-link to="/SMTFeeding" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
          <van-field v-model="slot" name="slot" label="站位" placeholder="站位" :rules="[{ required: true, message: '请填写站位' }]" />
          <van-field v-model="fd" name="fd" v-show="fd_show" label="飞达" placeholder="飞达" />
          <van-field v-model="item" name="item" label="物料" placeholder="物料" :rules="[{ required: true, message: '请填写物料' }]" />
          <van-field v-model="hdType" name="hdType" v-show="hdType_show" label="类型" placeholder="类型" />
          <div style="margin: 16px;">
            <van-button square type="info" id="orderRelease" v-show="orderRelease_show">工单下达</van-button>
            <van-button square type="info">受否齐料</van-button>
            <van-button square type="info" native-type="submit">提交</van-button>
          </div>
          </van-form>

  </div>
</template>
<script>
  import $ from 'jquery';
  export default {
    data() {
      return {
        slot: '',
        item: '',
        fd: '',
        hdType: '',
        fd_show: true,
        orderRelease_show: true,
        hdType_show: true

      };
    },
    methods: {
      onSubmit(values) {
        var param = new Object();
        param.site = this.$route.query.globalSite.toUpperCase();
        param.SHOP_ORDER = this.$route.query.SHOP_ORDER.toUpperCase();
        param.RESRCE = this.$route.query.RESRCE.toUpperCase();
        param.CARDID = this.$route.query.CARDID.toUpperCase();
        param.azm = this.$route.query.azm.toUpperCase();
        param.operation = this.$route.query.operation.toUpperCase();
        param.is_out_item = this.$route.query.is_out_item.toUpperCase();
        param.is_scan_fd = this.$route.query.is_scan_fd.toUpperCase();
        param.tl = this.$route.query.tl.toUpperCase();
        param.first_resrce = this.$route.query.first_resrce.toUpperCase();
        param.sop_version = this.$route.query.sop_version.toUpperCase();
        param.slot = values.slot.toUpperCase();
        var temp = values.item.split(",");
        if (temp.length == 1) {
          temp = item.value.split("，");
        }
        if (temp.length == 4) {
          param.item = temp[0].toUpperCase();
          param.provider_id = temp[1].toUpperCase();
          param.produced_date = temp[2].toUpperCase();
          param.produced_address = temp[3].toUpperCase();
          //param.qty="1";
        } else if (temp.length == 5) {
          param.item = temp[0].toUpperCase();
          param.provider_id = temp[1].toUpperCase();
          param.produced_date = temp[2].toUpperCase();
          param.produced_address = temp[3].toUpperCase();

        } else if (temp.length > 5) {
          param.item = temp[0].toUpperCase();
          param.provider_id = temp[1].toUpperCase();
          param.produced_date = temp[2].toUpperCase();
          param.produced_address = temp[3].toUpperCase();
          param.gysitem = temp[5].toUpperCase();
        } else {
          Toast("物料编码格式不正确！");
          return false;
        }
        var json = JSON.stringify(param);
          //判断物料编码第三 四位是否为01，02或13， 如果是要进行输入取样值
        var item34 = param.item.substring(2, 4);
        var isinput = false;
        if (item34 == '01') {
        
        }

      }
    },
    mounted() {
      var first_resrce = this.$route.query.first_resrce;
      if (first_resrce == null || first_resrce == "") {
        this.fd_show = false;
        this.orderRelease_show = false;
        this.hdType_show = false;
      }
    }

  };
</script>
<style>
</style>
