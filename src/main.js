import Vue from 'vue';
import App from './App';
import router from './router';
import { Swipe, SwipeItem } from 'mint-ui';
import { Header } from 'mint-ui';
//import { Button } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
import { TabContainer, TabContainerItem } from 'mint-ui';
import 'vant/lib/index.css';
import Vant from 'vant';
import { ActionSheet } from 'vant';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';

/* import { Grid, GridItem } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { NavBar } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { ActionSheet } from 'vant';
import { Toast } from 'vant'; */
Vue.use(Vant);
Vue.use(iView);
Vue.use(ActionSheet);
Vue.prototype.$axios = axios;
/* Vue.use(ActionSheet);
//import { Tabbar, TabbarItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(DropdownMenu);
Vue.use(DropdownItem); */
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

// 按需引入部分组件
Vue.config.productionTip = false;
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
//Vue.component(Button.name, Button);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
