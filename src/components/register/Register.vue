<template>
    <div class="index">
        <parallax class="hero" style="background-image: url(/static/img/bg.jpg)">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-8">
                        <h3>Stwórz konto</h3>
                        <input v-model="email" type="text" placeholder="Email"><br>
                        <input name="password" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('repeat_password') }" v-model="password" type="password" placeholder="Password"><br>
                        <input name="repeate_password" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" placeholder="Repeast password"><br>
                        <button v-on:click="register" type="button" class="btn btn-success">zarejestruj</button>
                        <p><router-link to="/login">Zaloguj się</router-link></p>
                    </div>
                </div>
            </div>
        </parallax>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
