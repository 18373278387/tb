<template>
  <div>
    <mt-header fixed title="点位绑定">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
          <van-field v-model="userCode" name="userCode" label="工单" placeholder="工单" :rules="[{ required: true, message: '请填写工单' }]" />
          <van-field v-model="pointCount" name="pointCount" label="点位并联数" placeholder="点位并联数" :rules="[{ required: true, message: '请填写点位并联数' }]" />
          <van-field v-model="packCount" name="packCount" label="pack数" placeholder="pack数" :rules="[{ required: true, message: '请填写pack数' }]" />
          <van-field v-model="sfc" name="sfc" label="条码" placeholder="条码" :rules="[{ required: true, message: '请填写条码' }]" />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">查询</van-button>
          </div>
          </van-form>
          <div>
            <Table stripe border ref="selection" :columns="columns" :data="data"></Table>
          </div>
  </div>
</template>

<script>
  var data = [{lineNo:'1',sfc:'条码1',sfcType:'类型1'}];
  export default {
    data() {
      return {
        userCode: '',
        pointCount: '',
        packCount: '',
        sfc: '',
        columns: [{
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '序号',
            key: 'lineNo',
            sortable: true
          },
          {
            title: '条码',
            key: 'sfc'
          },
          {
            title: '类型',
            key: 'sfcType',
            sortable: true
          }
        ],
        data: data
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
        getData(values.userCode,values.pointCount,values.packCount,values.sfc);
      }
    }

  }

  function getData(userCode,pointCount,packCount,sfc){
    var rul = "http://localhost:18082/view/tb/pointBind/checkSFC"
      axios.post(rul, {
        userCode: userCode,        // 参数 firstName
        pointCount: 'pointCount',    // 参数 lastName
        packCount:packCount,
        sfc:sfc
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
</script>

<style>
</style>
