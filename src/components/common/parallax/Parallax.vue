<template>
    <div class="parallax">
        <div class="parallax-img" :style="{backgroundImage: 'url(' + background + ')', transform: scroll}"></div>
        <slot></slot>
    </div>
</template>
<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
