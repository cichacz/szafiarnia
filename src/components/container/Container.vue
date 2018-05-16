<template>
    <div class="content clearfix">
        <ul>
            <li v-for="item in items" :key="item.name">
                <router-link :to="{name: 'item', params: {id: item.id}}">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
