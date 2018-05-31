<template>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            <div class="content clearfix">
                <h3>
                    <ribbon>Kreator Pakowania</ribbon>
                </h3>
                <b-tabs pills card vertical>
                    <b-tab title="Start" active>
                        <form>
                            <div class="form-group">
                                <label for="tripLength">Witamy w kreatorze pakowania przedmiotów w Szafiarni. Wprowadź
                                    liczbę dni zaplanowanego wyjazdu:</label>
                                <input type="number" class="form-control" v-model="tripLength" id="tripLength" aria-describedby="emailHelp"
                                       placeholder="Liczba dni" required>
                                <small id="numberHelp" class="form-text text-muted">Liczba dni musi zostać wskazana
                                    wartością liczbową
                                </small>
                            </div>
                            <b-button>Przejdź dalej</b-button>
                        </form>
                    </b-tab>
                    <b-tab title="Bielizna i skarpety">
                        <p>Wybrane</p>
                        <ul>
                            <li v-for="item in filterByCategories(underwearAndSocks, packed)" :key="item.id" :item="item" :container="container">
                                {{ item.name }}
                            </li>
                        </ul>
                        <p>Dostępne</p>
                        <ul>
                            <li v-for="item in filterByCategories(underwearAndSocks, items)" :key="item.id" :item="item" :container="container">
                                {{ item.name }}
                            </li>
                        </ul>
                    </b-tab>
                    <b-tab title="Ubrania codzienne">
                        <p>Wybrane</p>
                        <ul>
                            <li v-for="item in filterByCategories(normalClothes, packed)" :key="item.id" :item="item" :container="container">
                                {{ item.name }}
                            </li>
                        </ul>
                        <p>Dostępne</p>
                        <ul>
                            <li v-for="item in filterByCategories(normalClothes, items)" :key="item.id" :item="item" :container="container">
                                {{ item.name }}
                            </li>
                        </ul>
                    </b-tab>
                    <b-tab title="Ubrania wierzchnie">
                        <p>Wybrane</p>
                        <ul>
                            <li v-for="item in filterByCategories(outsideClothes, packed)" :key="item.id" :item="item" :container="container">
                                {{ item.name }}
                            </li>
                        </ul>
                        <p>Dostępne</p>
                        <ul>
                            <li v-for="item in filterByCategories(outsideClothes, items)" :key="item.id" :item="item" :container="container">
                                {{ item.name }}
                            </li>
                        </ul>
                    </b-tab>
                    <b-tab title="Buty, akcesoria i inne">
                        <p>Wybrane</p>
                        <ul>
                            <li v-for="item in filterByCategories(shoesAndOthers, packed)" :key="item.id" :item="item" :container="container">
                                {{ item.name }}
                            </li>
                        </ul>
                        <p>Dostępne</p>
                        <ul>
                            <li v-for="item in filterByCategories(shoesAndOthers, items)" :key="item.id" :item="item" :container="container">
                                {{ item.name }}
                            </li>
                        </ul>
                    </b-tab>
                    <b-tab title="Koniec">
                        <b-button v-on:click="finishPacking()">Zatwierdź wybór i przejdź do spakowanych rzeczy</b-button>
                        <b-button>Porzuć kreator</b-button>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>
<script src="./component.ts" lang="ts"></script>
