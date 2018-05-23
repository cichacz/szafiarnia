<template>
    <div class="mb-4">
        <transition name="slide-from-top">
            <div v-if="!ready" class="position-absolute w-100 preloader">
                <div class="d-flex justify-content-center">
                    <div class="col-sm-10 col-md-9 col-lg-6">
                        <div class="text-center content">
                            <h3>Trwa ładowanie elementów</h3>
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
                </div>
            </div>
        </transition>
        <div class="row">
            <div v-for="item in items" :key="item.id" class="col-sm-6 col-md-4 col-lg-3">
                <div class="card shadow mt-4">
                    <img class="card-img-top" src="http://place-hold.it/400x300" :alt="item.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" v-if="isClean" @click.prevent="setAsDirty(item)" class="card-link">Przenieś do prania</a>
                        <a href="#" v-if="!isClean" @click.prevent="setAsClean(item)" class="card-link">Oznacz jako wyprane</a>
                        <router-link :to="{name: 'item', params: {id: item.id, container: id}}" class="card-link">
                            Edytuj
                        </router-link>
                        <a href="#" @click.prevent="deleteItem(item)" class="card-link text-danger">Usuń</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
