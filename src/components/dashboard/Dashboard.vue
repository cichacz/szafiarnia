<template>
    <div class="dashboard-body">
        <nav class="navbar navbar-expand-md navbar-dark bg-primary sticky-top shadow-sm">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mt-4 mt-md-auto mb-2 mb-md-auto flex-grow-1 justify-content-center">
                    <li v-if="!containers.length">
                        <a href="#" class="nav-link h4 mb-0">
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
                        </a>
                    </li>
                    <li v-for="container in containers" :key="container.name">
                        <router-link :to="getUrl(container)" class="nav-link position-relative h4 mb-0" :class="{active: isActive(container)}">
                            <span v-if="showBadge(container)" class="navbar-badge"><span class="badge badge-pill badge-primary">{{ showBadge(container) }}</span></span> {{ container.name }}
                            <span v-if="isActive(container)" class="sr-only">(current)</span>
                        </router-link>
                    </li>
                </ul>
                <a href="#" @click.prevent="logout" class="btn btn-outline-light logout-btn"><i class="fa fa-times"></i> Wyloguj</a>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
