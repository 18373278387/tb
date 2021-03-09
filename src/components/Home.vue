<template>

<div>
<!--  <van-grid>
    <van-grid-item icon="../../static/icons/ic_duty.svg" text="DIP线PDA上料" to="/DIPFeeding"/>
     <van-grid-item icon="../../static/icons/ic_workorder.svg" text="SMT PDA上料" to="/SMTFeeding"/>
      <van-grid-item icon="../../static/icons/ic_capacity.svg" text="二维码校验" to="/QRCodeCheck"/>
       <van-grid-item icon="../../static/icons/ic_knowledge.svg" text="SMT工单下达" to="/SMTFeeding"/>
  </van-grid>
  <van-grid>
    <van-grid-item icon="../../static/icons/ic_property.svg" text="物料状态查询" to="/MaterialStatusSeach"/>
     <van-grid-item icon="../../static/icons/ic_polling.svg" text="DIP物料卸载" to="/DIPMaterialUnload"/>
      <van-grid-item icon="../../static/icons/ic_myfocus.svg" text="SMT物料卸载" to="/SMTMaterialUnload"/>
       <van-grid-item icon="../../static/icons/ic_more.svg" text="DIP工单下达" to="/DIPOrderRelease"/>
  </van-grid> -->
  <van-form @submit="onSubmit">
    <van-field
      v-model="shoporder"
      name="工单"
      label="工单"
      placeholder="工单"
      :rules="[{ required: true, message: '请填写工单' }]"
    />
    <van-field
      v-model="resrce"
      name="设备"
      label="设备"
      placeholder="设备"
      :rules="[{ required: true, message: '请填写设备' }]"
    />
    <van-field
      v-model="cardid"
      name="设备"
      label="设备"
      placeholder="设备"
      :rules="[{ required: true, message: '请填写工号' }]"
    />
    <div style="margin: 16px;">
     <!-- <van-button round block type="info" native-type="submit">提交</van-button> -->

       <van-button square   type="info" native-type="submit" >提交</van-button>
       <van-button square   type="primary" >校对</van-button>
    </div>
  </van-form>
</div>
</template>

<script>

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
       console.log('submit', values);
     },
   },
 };
</script>

<style>
</style>
