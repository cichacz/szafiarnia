<template>
    <div class="index">
        <div class="hero" style="background-image: url(/static/img/bg.jpg)">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-8">
                        <div class="content clearfix">
                            <h3>
                                <ribbon>Stwórz konto</ribbon>
                            </h3>
                            <div v-if="error" class="alert alert-warning" role="alert">
                                {{ error }}
                            </div>
                            <form novalidate @submit.prevent="register">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input v-model="email" v-validate="'required|email'" name="email" type="email" id="email"
                                           class="form-control" placeholder="Email"/>
                                    <small class="form-text text-danger" v-if="errors.has('email')">
                                        {{ errors.first('email') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="password">Hasło</label>
                                    <input v-model="password" v-validate="'required'" name="hasło" type="password"
                                           id="password"
                                           class="form-control" placeholder="Hasło"/>
                                    <small class="form-text text-danger" v-if="errors.has('hasło')">
                                        {{ errors.first('hasło') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="password-confirm">Powtórz hasło</label>
                                    <input v-validate="'required|confirmed:hasło'" name="potwierdzenie"
                                           type="password" id="password-confirm"
                                           class="form-control" placeholder="Powtórz hasło"/>
                                    <small class="form-text text-danger" v-if="errors.has('potwierdzenie')">
                                        {{ errors.first('potwierdzenie') }}
                                    </small>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-success">Zarejestruj</button>
                                </div>
                            </form>
                            <div class="float-right mt-4">Masz już konto?
                                <router-link to="/login">Zaloguj się</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
