
import Vue from 'vue'
import Router from 'vue-router'
import soMain from '@/components/main'
import event from '@/components/event/event'
import eventDetail from '@/components/event/detail'
import aboutUs from '@/components/aboutUs'
import firstPage from '@/components/firstPage'
Vue.use(Router);

const router = new Router({
  
  routes: [
    
    {
        path: "/",
        name: "soMain",
        component: soMain,
        redirect:'firstPage',
        iconCls: 'el-icon-date',
            children:[
              {
                path: '/event',
                name: 'event',
                component: event
              },
              {
                path: '/detail',
                name: 'detail',
                component: eventDetail
              },
              {
                path: '/aboutUs',
                name: 'aboutUs',
                component: aboutUs
              },
              {
                path: '/firstPage',
                name: 'firstPage',
                component: firstPage
              }
            ]
      }
  ],
});

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;