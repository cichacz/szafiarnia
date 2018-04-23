<template>
    <div class="index">
        <parallax class="hero" style="background-image: url(/static/img/bg.jpg)">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-8">
                        <h3>Stwórz konto</h3>
                        <input type="text" placeholder="Email"><br>
                        <input type="password" placeholder="Password"><br>
                        <input type="password" placeholder="Repeast password"><br>
                        <button type="button" class="btn btn-success">zarejestruj</button>
                    </div>
                </div>
            </div>
        </parallax>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
