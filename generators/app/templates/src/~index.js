import Vue from 'vue';<% if (platform === 'PC') { %>
import iView from 'iview';
import 'iview/dist/styles/iview.css';<% } else if (platform === 'mobile') { %>
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';<% } %>
import $router from './components/utils/$router';
import $store from './components/utils/$store';
import $app from './components/views/$app/index.vue';



// 加载组件库<% if (platform === 'PC') { %>
Vue.use(iView);<% } else if (platform === 'mobile') { %>
Vue.use(MintUI);<% } %>

// 启动应用
// 创建系统根组件（vm）
export default new Vue({
    el: '#mount',
    router: $router,
    store: $store,
    render: createElement => createElement($app)
});
