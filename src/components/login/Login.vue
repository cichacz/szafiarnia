<template>
    <div class="index">
        <div class="hero" style="background-image: url(/static/img/bg.jpg)">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-8">
                        <div class="content clearfix">
                            <h3><ribbon>Logowanie</ribbon></h3>
                            <div v-if="error" class="alert alert-warning" role="alert">
                                {{ error }}
                            </div>
                            <form novalidate @submit.prevent="login" class="text-center">
                                <div class="form-group">
                                    <input v-model="email" type="email" class="form-control" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input v-model="password" type="password" class="form-control" placeholder="Hasło">
                                </div>
                                <button class="btn btn-success">Zaloguj</button>
                            </form>
                            <div class="float-right mt-4">Nie masz konta? <router-link to="/register">Załóż je</router-link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
