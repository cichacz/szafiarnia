<template>
    <div class="dashboard-body">
        <nav class="navbar navbar-expand-md navbar-dark bg-primary sticky-top shadow-sm">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mt-4 mt-md-auto mb-2 mb-md-auto flex-grow-1 justify-content-center">
                    <li v-for="container in containers" :key="container.name">
                        <router-link :to="getUrl(container)" class="nav-link position-relative h4 mb-0" :class="{active: isActive(container)}">
                            <span v-if="showBadge(container)" class="navbar-badge"><span class="badge badge-pill badge-primary">{{ showBadge(container) }}</span></span> {{ container.name }}
                            <span v-if="isActive(container)" class="sr-only">(current)</span>
                        </router-link>
                    </li>
                </ul>
                <router-link v-if="defaultContainer" :to="{name: 'item-add'}" class="btn btn-outline-light">
                    <i class="fa fa-plus fa-fw"></i>
                </router-link>
                <a href="#" @click.prevent="logout" class="btn btn-outline-danger"><i class="fa fa-times"></i></a>
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
