// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import soHeader from '@/components/common/header'
import soMain from '@/components/common/main'
import soFooter from '@/components/common/footer'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component("soHeader",soHeader)
Vue.component("soMain",soMain)
Vue.component("soFooter",soFooter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
