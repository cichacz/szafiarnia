<template>
    <div class="content clearfix">
        <ul>
            <li v-for="(item, id) in items" :key="id">
                <!-- <router-link :to="{name: 'item', params: {id: item.id}}">{{ item.name }}</router-link> -->
                <p>{{ item.name }}</p>
            </li>
            <!-- <li v-for="(item, idx) in items" :key="idx">
                <h4>{{ item.name }}</h4>
            </li> -->
        </ul>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
