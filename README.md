# 轱辘  - 一个 Vue UI 组件
  作者： fly
[![Build Status](https://travis-ci.org/lch524/gulu.svg?branch=master)](https://travis-ci.org/lch524/gulu)
## 介绍
这是学习vue过程中开发的一个UI框架。
## 开始使用
1. 添加 css 样式
使用本框架前，请在CSS中开启border-box
  ``
  *，*::before，*::after{box-sizing: boeder-box;}
  ``
   IE 8及以上浏览器都支持此样式
   你还需要设置默认颜色等变量（后续会改为 css 变量）
 html { /*:root代表作用域，在这里可以改成html和.g-button*/
   --button-height: 32px;
   --font-size: 14px;
   --button-bg: white;
   --button-active-bg: #eee;
   --border-raduis: 4px;
   --color: #999;
   --border-color: #999;
   --border-color-hover: #666;
 } 
IE 15及以上浏览器都支持该样式
2. 安装gulu_fly
```
    npm i --save gulu_fly
```
3.引入gulu_fly
    ```
    import {Button, ButtonGroup, Icon} from ' gulu_fly '
    import 'gulu_fly/dist/ index.css'
    
    export default {
    name:' app' ，
    components: {
    ' g-button': Button, 
    'g-icon': Icon
    }
    ```
4. 引入 svg symbols
```
  <script src="//at.alicdn.com/t/font_1783661_ko27bf2aq7.js"></script>
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


