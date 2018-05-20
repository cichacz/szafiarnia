<template>
    <div class="index">
        <parallax class="hero" background="/static/img/bg.jpg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-8">
                        <div class="content -ribbon clearfix">
                            <h1>
                                <ribbon>Szafiarnia</ribbon>
                            </h1>
                            <h2 class="text-center">Aplikacja do zarządzania szafą</h2>
                            <p class="content-text">
                                Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non
                                felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.
                                Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac,
                                laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit
                                amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu,
                                luctus et interdum adipiscing wisi.
                            </p>
                            <div class="row justify-content-center">
                                <div class="col-sm-7 col-md-8 col-lg-6">
                                    <router-link :to="{name: 'panel'}" class="btn btn-primary btn-block btn-lg mt-4">
                                        Rozpocznij porządki
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </parallax>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-5 mt-5 mb-4">
                    <h2 class="text-center">
                        <ribbon>Dlaczego warto?</ribbon>
                    </h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-8 mb-5">
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="http://via.placeholder.com/250x150" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="http://via.placeholder.com/250x150" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="http://via.placeholder.com/250x150" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
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
