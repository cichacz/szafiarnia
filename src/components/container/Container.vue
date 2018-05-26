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
        <div class="row justify-content-center">
            <div v-if="ready" class="col-sm-6 col-md-4 col-lg-3">
                <div class="card shadow p-1">
                    <router-link :to="{name: 'item-add'}" class="btn btn-block btn-outline-primary">
                        <i class="fa fa-plus fa-fw fa-huge"></i> Dodaj przedmiot
                    </router-link>
                    <router-link :to="{name: 'item-pack'}" class="btn btn-block btn-outline-info">
                        <i class="fa fa-plus fa-fw fa-huge"></i> Spakuj się
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="item in items" :key="item.id" class="col-sm-6 col-md-4 col-lg-3">
                <item-card :item="item" :container="container" @item-remove="removeItem($event)"></item-card>
            </div>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
