<template>
    <form @submit.prevent="validateBeforeSubmit()">
        <div class="index">
            <parallax class="hero" style="background-image: url(/static/img/bg.jpg)">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-8">
                            <h3>Stwórz konto</h3>
                            <div class="alert alert-danger" v-show="errors.any()">
                                <div v-if="errors.has('email')">
                                    {{ errors.first('email') }}
                                </div>
                                <div v-if="errors.has('password')">
                                    {{ errors.first('password') }}
                                </div>
                                <div v-if="errors.has('password_confirmation')">
                                    {{ errors.first('password_confirmation') }}
                                </div>
                            </div>
                            <input v-model="email" v-validate="'required|email'" name="email" type="text" placeholder="Email"><br>
                            <input v-model="password" v-validate="'required'" name="password" type="password" placeholder="Password"><br>
                            <input v-model="passwordConfirmation" v-validate="'required|confirmed:password'" data-vv-as="password" name="password_confirmation" type="password" placeholder="Confirm password"><br>
                            <button v-on:click="register" type="submit" class="btn btn-success">zarejestruj</button>
                            <p><router-link to="/login">Zaloguj się</router-link></p>
                        </div>
                    </div>
                </div>
            </parallax>
        </div>
    </form>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
