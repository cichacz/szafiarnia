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
                                <p>Szafiarnia to innowacyjny system zarządzający twoimi ubraniami w szafie i w trakcie podróży. Dzięki niemu już nigdy nie zgubisz się w trakcie pakowania do podróży.</p>
                                <p>Szafiarnia oferuje 3 najważniejsze tryby zarządzania ubraniem. Szafa, Podróż i Pranie. Pozwalają one zoptymalizować codzienny wysiłek poświęcany na analizowanie szafy i ułatwiają dokonywanie wyborów.</p>
                                <p> Tryb szafa pozwala na zgromadzenie i kontrolowanie wszystkich ubrań. Dzięki czemu twój dzień będzie prostszy a cała gama rzeczy dostępna za jednym kliknięciem.</p>
                                <p> Tryb podróż jest miniaturową wersją twojej szafy, udostępnia łatwy kreator pakowania, który pozwoli dobrać ci optymalną ilość rzeczy na całą twoją podróż. Nigdy już nie zapomnisz o dodatkowej porcji bielizny, a gdy ubrudzisz swoje ulubione spodnie zawsze będziesz mieć zapasowe. Tryb szafy pomoże ci się również szybko rozpakować po zakończonej podróży.</p>
                                <p> Tryb pranie pozwoli ci szybko wskazać brudne rzeczy i zarządzać praniem w ciągu dwóch kliknięć, twoje rzeczy przeniosą się wtedy z szafy głównej do szafy Pranie i nie pomylisz się podczas wybierania ich na codzień </p>
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
                <div class="col-lg-8 mb-5">
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
