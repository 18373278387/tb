<template>
  <div>
    <mt-header fixed title="点位绑定">
      <router-link to="/" slot="left" class="router-link-active">
        < 返回 </router-link> </mt-header> <van-form @submit="onSubmit">
          <van-field v-model="shopOrder" name="shopOrder" label="工单" placeholder="工单" :rules="[{ required: true, message: '请填写工单' }]" />
          <van-field v-model="sfc" name="sfc" label="pack条码" placeholder="pack条码" :rules="[{ required: true, message: '请填写pack条码' }]" />
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
  var data = [{lineNo:'1',POINT_SFC:'点位1',PACK_SFC:'PACK_SFC1'}];
  export default {
    data() {
      return {
        shopOrder: '',
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
            title: '点位',
            key: 'POINT_SFC'
          },
          {
            title: 'pack条码',
            key: 'PACK_SFC',
            sortable: true
          }
        ],
        data: data
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
        getData(values.shopOrder,values.sfc);
      }
    }

  }

  function getData(shopOrder,sfc){
    var rul = "http://localhost:18082/view/tb/pointBind/checkSFC"
      axios.post(rul, {
        shopOrder: shopOrder,        // 参数 firstName
        sfc: 'sfc'
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
