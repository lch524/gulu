import Vue from 'vue'
import Button from './button'//引入
import Icon from './icon'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)//映射

new Vue({
    el:"#app",
    data:{
        loading1: false,
        loading2: true,
        loading3: false
    },
})
