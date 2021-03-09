<template>
  <div id="app">
<!--    <mt-header fixed title="首页">
      <router-link to="/login" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> -->
   <van-nav-bar
      title="首页" fixed safe-area-inset-top
      left-text="返回"
      left-arrow   @click-left="onClickLeft"
    ></van-nav-bar>
    <div>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="tab1">
          <div style="height: 200px;">
            <mt-swipe :auto="2000">
              <mt-swipe-item class="swipebg_1"></mt-swipe-item>
              <mt-swipe-item class="swipebg_2"></mt-swipe-item>
            </mt-swipe>
          </div>
          <div>
            <van-grid>
              <van-grid-item icon="../../static/icons/ic_duty.svg" text="DIP线PDA上料" :to="{name:'DIPFeeding', query:{globalSite:this.$route.query.globalSite}}" />
              <van-grid-item icon="../../static/icons/ic_workorder.svg" text="SMT PDA上料" :to="{name:'SMTFeeding', query:{globalSite:this.$route.query.globalSite}}"/>
              <van-grid-item icon="../../static/icons/ic_capacity.svg" text="二维码校验" to="/QRCodeCheck" />
              <van-grid-item icon="../../static/icons/ic_knowledge.svg" text="SMT工单下达" :to="{name:'SMTOrderRelease', query:{globalSite:this.$route.query.globalSite}}"/>
            </van-grid>
            <van-grid>
              <van-grid-item icon="../../static/icons/ic_property.svg" text="物料状态查询" to="/MaterialStatusSeach" />
              <van-grid-item icon="../../static/icons/ic_polling.svg" text="DIP物料卸载" to="/DIPMaterialUnload" />
              <van-grid-item icon="../../static/icons/ic_myfocus.svg" text="SMT物料卸载" to="/SMTMaterialUnload" />
              <van-grid-item icon="../../static/icons/ic_more.svg" text="DIP工单下达" to="/DIPOrderRelease" />
            </van-grid>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
           <van-grid>
             <van-grid-item icon="../../static/img/zdbd.svg" text="点位绑定" to="/PointBind"/>
             <van-grid-item icon="../../static/img/电机.svg" text="点位解绑" to="/PointUnBind"/>
             <van-grid-item icon="../../static/img/测试.svg" text="测试数据收集" to="/TestDataCollection"/>
             <van-grid-item icon="../../static/img/通讯.svg" text="通讯数据收集" to="/CommunicateDataCollection"/>
           </van-grid>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab3">
          tab3内容
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar fixed v-model="selected">
        <mt-tab-item id="tab1">
          <img slot="icon" src="../../static/img/main_Logo.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <img slot="icon" src="../../static/img/equipment_logo.png" />
          PACK
        </mt-tab-item>
       <!-- <mt-tab-item id="tab3">
          <img slot="icon" src="../../static/img/mine_logo.png" />
          我的
        </mt-tab-item> -->
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data: function() {
      return {
        selected: 'tab1' //默认选中,
      }
    },
     methods: {
        onClickLeft() {
         this.$router.push('/Site');
        }
      },
    method() {
      var tabName;
      if (location.href.split('?')[1].indexOf('tab1') !== -1) {
        tabName = 'tab1';
      } else if (location.href.split('?')[1].indexOf('tab2') !== -1) {
        tabName = 'tab2';
      } else if (location.href.split('?')[1].indexOf('tab3') !== -1) {
        tabName = 'tab3';
      }
      document.getElementsByClassName(tabName)[0].click();
    },
    mounted:function(){
     
    }
  }
</script>

<style>
  .swipebg_1 {
    background-image: url(../../static/img/slide1.jpg);
  }

  .swipebg_2 {
    background-image: url(../../static/img/slide2.jpeg);
  }

  .container {
    margin-top: 5%;
    width: '100%';
    display: flex;
  }

  .img_display {
    width: 25%;
    height: 10%;
    text-align: center;
    padding: 4%;
  }

  .span {
    font-size: 9px;
  }
</style>
