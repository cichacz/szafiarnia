<template>
    <div class="index">
        <parallax class="hero" style="background-image: url(/static/img/bg.jpg)">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-8">
                        <h3>Logowanie</h3>
                        <input type="text" placeholder="Email"><br>
                        <input type="password" placeholder="Password"><br>
                        <button v-on:click="login" type="button" class="btn btn-success">Zaloguj</button>
                        <p><router-link to="/register">Stwórz konto</router-link></p>
                    </div>
                </div>
            </div>
        </parallax>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
