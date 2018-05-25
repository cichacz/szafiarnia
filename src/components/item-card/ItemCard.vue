<template>
    <div class="card shadow mt-4">
        <img class="card-img-top" src="http://place-hold.it/400x300" :alt="item.name">
        <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text" v-html="categoryDisplay()"></p>
        </div>
        <div class="card-footer bg-white text-center p-1">
            <a href="#" v-if="isClean" @click.prevent="setAsDirty()" class="btn">Przenieś do prania</a>
            <a href="#" v-if="!isClean" @click.prevent="setAsClean()" class="btn text-success">Oznacz jako wyprane</a>
            <div class="btn-group btn-group-sm d-block" role="group">
                <router-link :to="{name: 'item', params: {id: item.id, container: item.idContainer}}" class="card-linkbtn text-secondary">
                    Edytuj
                </router-link>
                <a href="#" @click.prevent="deleteItem()" class="btn text-danger">Usuń</a>
            </div>
        </div>
        <div v-show="busy" class="card-img-overlay">
            <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube8"></div>
                <div class="sk-cube sk-cube9"></div>
            </div>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
