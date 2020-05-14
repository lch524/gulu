import Vue from 'vue'
import Button from './button'//引入
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'



Vue.component('g-button',Button)
Vue.component('g-icon',Icon)//映射
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)


new Vue({
    el:"#app",
    data:{
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    created: {
    },
    methods: {
        inputChange (e) {
            console.log(e);
        }
    }
})
