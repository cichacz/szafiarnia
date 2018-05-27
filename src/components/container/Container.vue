<template>
    <div class="mb-4">
        <transition name="slide-from-top">
            <div v-if="!ready" key="loading" class="position-absolute w-100 preloader">
                <div class="row justify-content-center">
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
            <div v-else key="ready" class="row justify-content-center">
                <div class="col-sm-8 col-md-6 col-lg-5">
                    <div class="text-center content">
                        <router-link :to="{name: 'item-add'}" class="btn btn-outline-primary d-block text-left d-sm-inline-block mb-3 mb-sm-auto">
                            <i class="fa fa-plus fa-fw"></i> Dodaj przedmiot
                        </router-link>
                        <router-link :to="{name: 'item-pack'}" class="btn btn-outline-info d-block text-left d-sm-inline-block">
                            <i class="fa fa-suitcase fa-fw"></i> Spakuj się
                        </router-link>
                    </div>
                </div>
            </div>
        </transition>
        <transition-group name="pop-in" tag="div" class="card-columns">
            <item-card v-for="item in items" :key="item.id" :item="item" :container="container" @item-remove="removeItem($event)"></item-card>
        </transition-group>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
