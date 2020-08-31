import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'
import login from '../page/login.vue'
import manage from '../page/manage.vue'
import userList from '../components/userList.vue'
import Merchantlist from '../components/Merchantlist.vue'
import foodList from '../components/foodList.vue'
import orderList from '../components/orderList.vue'
import adminList from '../components/adminList.vue'
import addShop from '../components/addShop.vue'
import addGoods from '../components/addGoods.vue'
import visitor from '../components/visitor.vue'
import newMember from '../components/newMember.vue'
// 手动安装 router
Vue.use(Router)
const routes = [{
    path: '/',
    component: login
}, {
    path: '/manage',
    component: manage
}, {
    path: '/userList',
    component: userList
}, {
    path: '/Merchantlist',
    component: Merchantlist
}, {
    path: '/foodList',
    component: foodList
}, {
    path: '/orderList',
    component: orderList
}, {
    path: '/adminList',
    component: adminList
}, {
    path: '/addShop',
    component: addShop
}, {
    path: '/addGoods',
    component: addGoods
}, {
    path: '/visitor',
    component: visitor
}, {
    path: '/newMember',
    component: newMember
}]
export default new Router({
    routes
})