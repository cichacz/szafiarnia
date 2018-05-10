<template>
    <div class="index">
        <parallax class="hero" style="background-image: url(/static/img/bg.jpg)">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-8">
                        <div class="content -ribbon clearfix">
                            <h1>
                                <ribbon>Logowanie</ribbon>
                            </h1>
                            <a href="#" @click.prevent="doLogin">Zaloguj</a>
                        </div>
                    </div>
                </div>
            </div>
        </parallax>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
