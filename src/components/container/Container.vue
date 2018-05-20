<template>
    <div class="content clearfix">
        <div class="row">
            <div v-for="item in items" :key="item.id" class="col-sm-6 col-md-4 col-lg-3">
                <div class="card mb-4">
                    <img class="card-img-top" src="http://place-hold.it/400x300" :alt="item.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Przenieś do prania</a>
                        <router-link :to="{name: 'item', params: {id: item.id}}" class="card-link">
                            Edytuj
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
