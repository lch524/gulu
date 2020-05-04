import Vue from 'vue'
import Button from './button'//引入
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)//映射
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el:"#app",
    data:{
        loading1: false,
        loading2: true,
        loading3: false
    },
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
//引入chai
const expect = chai.expect

try {
//单元测试
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount('#test')//把vm挂载到内存中并且动态生成一个按钮（通过js把按钮写到页面中，也就是后面的“#test”），每个div只能传入一个值
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1');
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2');
        vm.$el.remove()//清除button元素
        vm.$destroy()//清除button对象
    }

    {
        //mock
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        })
        vm.$mount()
        let spy = chai.spy(function () {})

        vm.$on('click', spy)
        console.log(vm.$el);
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()//希望该间谍函数被调用
    }//事件测试
} catch(error) {
        window.errors = [error]
}finally {
    window.errors && window.errors.forEach((error) =>{
        console.error(error.message);
    })
}
