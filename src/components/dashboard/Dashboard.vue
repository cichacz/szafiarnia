<template>
    <div class="index">
        <div class="hero" style="background-image: url(/static/img/bg.jpg)">
            <nav class="navbar navbar-expand-md navbar-dark bg-primary">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav mt-4 mt-md-auto mb-2 mb-md-auto">
                        <li v-for="container in containers" :key="container.name">
                            <router-link :to="getUrl(container)" class="nav-link h4 mb-0" :class="{active: isActive(container)}">
                                <i :class="container.icon"></i> {{ container.name }}
                                <span v-if="isActive(container)" class="sr-only">(current)</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="content clearfix">
                            <router-view/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
