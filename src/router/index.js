import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import Login from '@/page/login/login';
import DIPFeeding from '@/page/content/DIPFeeding';
import SMTFeeding from '@/page/content/SMTFeeding';
import QRCodeCheck from '@/page/content/QRCodeCheck';
import SMTOrderRelease from '@/page/content/SMTOrderRelease';
import MaterialStatusSeach  from '@/page/content/MaterialStatusSeach';
import DIPMaterialUnload  from '@/page/content/DIPMaterialUnload';
import SMTMaterialUnload  from '@/page/content/SMTMaterialUnload';
import DIPOrderRelease from '@/page/content/DIPOrderRelease';
import TestDataCollection from  '@/page/content/TestDataCollection';
import CommunicateDataCollection from  '@/page/content/CommunicateDataCollection';
import PointBind from  '@/page/content/PointBind';
import PointUnBind from '@/page/content/PointUnBind';
import SmtOperation_sl from '@/page/content/SmtOperation_sl';
import BatchCheck from '@/page/content/BatchCheck';
import FeederReplace from '@/page/content/FeederReplace';
import Proofread from '@/page/content/Proofread';
import TableTest from '@/page/table/TableTest';
import Site from '@/page/content/Site';
import Search from '@/page/content/Search';
import MaterialSharing from '@/page/content/MaterialSharing';
import DipOperation from '@/page/content/DipOperation';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
     path: '/DIPFeeding',
     name: 'DIPFeeding',
     component: DIPFeeding
    },
    {
     path: '/SMTFeeding',
     name: 'SMTFeeding',
     component: SMTFeeding
    },
    {
     path: '/QRCodeCheck',
     name: 'QRCodeCheck',
     component: QRCodeCheck
    },
    {
      path: '/SMTOrderRelease',
      name: 'SMTOrderRelease',
      component: SMTOrderRelease
    },
    {
      path: '/MaterialStatusSeach',
      name: 'MaterialStatusSeach',
      component: MaterialStatusSeach
    },
    {
      path: '/DIPMaterialUnload',
      name: 'DIPMaterialUnload',
      component: DIPMaterialUnload
    },
    {
      path: '/SMTMaterialUnload',
      name: 'SMTMaterialUnload',
      component: SMTMaterialUnload
    },
    {
      path: '/DIPOrderRelease',
      name: 'DIPOrderRelease',
      component: DIPOrderRelease
    },
    {
      path: '/TestDataCollection',
      name: 'TestDataCollection',
      component: TestDataCollection
    },
    {
      path:'/CommunicateDataCollection',
      name: 'CommunicateDataCollection',
      component: CommunicateDataCollection

    },
    {
      path:'/PointBind',
      name: 'PointBind',
      component: PointBind

    },
    {
      path:'/PointUnBind',
      name: 'PointUnBind',
      component: PointUnBind

    },{
      path:'/TableTest',
      name: 'TableTest',
      component: TableTest
    },
    {
      path:'/Site',
      name: 'Site',
      component: Site
    },
    {
      path:'/SmtOperation_sl',
      name: 'SmtOperation_sl',
      component: SmtOperation_sl
    },
    {
      path:'/BatchCheck',
      name: 'BatchCheck',
      component: BatchCheck
    },
    {
      path:'/Proofread',
      name: 'Proofread',
      component: Proofread
    },
    {
      path:'/FeederReplace',
      name: 'FeederReplace',
      component: FeederReplace
    },
    {
      path:'/Search',
      name: 'Search',
      component: Search
    },
    {
      path:'/MaterialSharing',
      name: 'MaterialSharing',
      component: MaterialSharing
    },
    {
      path:'/DipOperation',
      name: 'DipOperation',
      component: DipOperation
    }
   
  ]
})
