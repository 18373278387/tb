<template>
  <div>
    <mt-header fixed title="测试数据收集">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form>
          <van-field v-model="sfc" id="sfc" name="sfc" label="条码" placeholder="条码" :rules="[{ required: true, message: '请填写条码' }]" />
          <van-field v-model="overchargeVoltage" id="overchargeVoltage" name="overchargeVoltage" label="过充电压"
            placeholder="过充电压" />
          <van-field v-model="overdischargeVoltage" id="overdischargeVoltage" name="overdischargeVoltage" label="过放电压"
            placeholder="过放电压" />
          <van-field v-model="capacity" id="capacity" name="capacity" label="容量" placeholder="容量" />
          <van-field v-model="surplusCapacity" id="surplusCapacity" name="surplusCapacity" label="第一步剩余容量" placeholder="第一步剩余容量" />

          <div style="margin: 16px;">
            <!-- <van-button round block type="info" native-type="submit">提交</van-button> -->
            <van-button type="primary" @click="onSubmit">良品过站</van-button>
            <van-button type="info" @click="poorRecord">记录不良</van-button>
            <van-button type="default" native-type="reset">重置</van-button>
          </div>
          </van-form>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    Toast
  } from 'vant';
  import $ from 'jquery';
  Vue.use(Toast);
  export default {
    data() {
      return {
        overchargeVoltage: '',
        sfc: '',
        overdischargeVoltage: '',
        capacity: '',
        surplusCapacity: ''
      }
    },
    methods: {
      onSubmit() {
        var overchargeVoltage = $("#overchargeVoltage").val();
        var overdischargeVoltage = $("#overdischargeVoltage").val();
        var capacity = $("#capacity").val();
        var surplusCapacity = $("#surplusCapacity").val();
        if (overchargeVoltage == '' && overdischargeVoltage == '' && capacity == '' && surplusCapacity == '') {
          Toast('后四个参数不同同时为空');
        } else {
          Toast('校验无误！');
        }
      },
      poorRecord() {
        alert("记录不良");
      }

    }
  }
</script>

<style>
</style>
