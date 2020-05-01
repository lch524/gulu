<template>
    <button clas ="g-button" >
        <div class="main" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
            <g-icon class="icon" v-if="icon && !loading" :name='icon'></g-icon>
            <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
            <div class="content">
                <slot/>
            </div>
        </div>

    </button>
</template>
<script>
    export default{
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
<style lang="less">
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;/*不是width制作按钮两边的空白而是使用padding留出空白*/
        border-radius: var(--button-raduis);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display:inline-flex;
        justify-content: center;
        align-content: center;
        vertical-align: middle;
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
    .main{
        display: inline-flex;
        vertical-align: middle;
        align-items: center;
        justify-content:center;
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