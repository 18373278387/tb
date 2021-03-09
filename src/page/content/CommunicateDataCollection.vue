<template>
  <div>
    <mt-header fixed title="通讯数据收集">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form>
          <van-field v-model="idCard" id="idCard" name="idCard" label="工号"  :rules="[{ required: true, message: '请填写工号' }]" />
          <van-field v-model="pack" id="pack" name="idCard" label="pack"  :rules="[{ required: true, message: '请填写Pack条码' }]" />
          <van-field v-model="SOC" id="SOC" name="SOC" label="SOC"  :rules="[{ required: true, message: '请填写SOC' }]" />
          <van-field v-model="capacity" id="capacity" name="capacity" label="容量"  :rules="[{ required: true, message: '请填写容量' }]" />
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
        idCard: '',
        pack: '',
        SOC: '',
        capacity: ''
      }
    },
    methods: {
      onSubmit() {
      // alert("良品过站");
      },
      poorRecord() {
        //alert("记录不良");
      }

    }
  }
</script>

<style>
</style>
