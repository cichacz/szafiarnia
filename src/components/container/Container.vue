<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.name">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
