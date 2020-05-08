<template>
    <button class ="g-button fly" @click="$emit('click')">
        <div class="main fly" :class="{[`icon-${iconPosition}`]: true}" >
            <g-icon class="icon" v-if="icon && !loading" :name='icon'></g-icon>
            <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
            <div class="content">
                <slot/>
            </div>
        </div>
    </button>
</template>
<script>
    import Vue from 'vue'
    import Icon from './icon'
    Vue.component('g-icon',Icon)
    export default{
        components: {
            'g-icon': Icon  //声明g-icon是上面所引入的icon.vue
        },
        props: {
            icon: {},
            loading: {
              type: Boolean,
              default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {
                    if (value !== 'left' && value !== 'right' ) {
                        return false;
                    } else {
                        return value
                    }
                }/*属性检查器*/
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;/*不是width制作按钮两边的空白而是使用padding留出空白*/
        border: 1px solid var(--border-color);
        border-radius: var(--border-raduis);
        background: var(--button-bg);
    }
    .main{
        display: inline-flex;
        vertical-align: middle;
        align-items: center;
        justify-content:center;
        &:hover {
            border-color: var(--border-color-hover);//&代表当前选择器选中的元素
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
    .content{
        order: 2;
    }
    .icon{
        order: 1;
        margin-right: .1em;
        margin-left: 0em;
    }
    .icon-right>.content{
        order: 1;
    }
    .icon-right>.icon{
            order: 2;
            margin-right: 0em;
            margin-left: .1em;
        }
    .loading{
        animation: spin 2s infinite linear;/*每两秒无限地线性旋转*/
    }

</style>
