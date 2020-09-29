import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

Vue.config.productionTip = false
// function getServerConfig (cb) {
//   let { protocol, host } = window.location
//   axios.get(`${protocol}//${host}/public/config.json`)
//     .then(res => {
//       Vue.prototype.baseURL = res.data.baseURL
//       cb && cb()
//     })
// }
// getServerConfig(() => {
//   new Vue({
//     render: h => h(App),
//   }).$mount('#app')
// })
new Vue({
  render: h => h(App),
}).$mount('#app')

