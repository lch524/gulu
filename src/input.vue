<template>
<div class="warpper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
        <icon name="error" class="icon-error"></icon>
        <span class="errorMessage">{{error}}</span>
    </template>
</div>
</template>
<script>
    import Icon from './icon'

export default {
    components:{Icon},/*另一种映射方式*/
    name: 'GuluInput',
    props: {
        value: {
            type: String, /*需使用大写字母开头*/
        },
        disabled: {
            type:Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    }
}
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $red: #F1453D;
    $box-shadow-color: rgb(0,0,0,0.5);
    .warpper{
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child){
            margin-right: .5em;
        }
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled] , &[readonly]{
                border-color: #bbbbbb;
                color: #bbbbbb;
                cursor: not-allowed;/*显示鼠标不可点击样式*/
            }
        }
        &.error {
            > input{
                border-color: $red;
            }
        }
        .icon-error {
            fill: $red;
        }
        .errorMessage {
            color: $red;
        }
    }
</style>