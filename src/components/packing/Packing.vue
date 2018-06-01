<template>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            <div class="content clearfix">
                <h3>
                    <ribbon>Kreator Pakowania</ribbon>
                </h3>
                <b-tabs pills card v-model="tabIndex">
                    <b-tab title="Start" active>
                        <form>
                            <div class="form-group">
                                <label for="tripLength">Witamy w kreatorze pakowania przedmiotów w Szafiarni. Wprowadź
                                    liczbę dni zaplanowanego wyjazdu:</label>
                                <input type="number" class="form-control" v-model="tripLength" id="tripLength" name="liczba dni" aria-describedby="emailHelp"
                                       placeholder="Liczba dni" v-validate="'required|min_value:1'">
                                <small id="numberHelp" class="form-text text-muted">
                                    Liczba dni musi zostać wskazana wartością liczbową
                                </small>
                                <small class="form-text text-danger" v-if="errors.has('liczba dni')">
                                    {{ errors.first('liczba dni') }}
                                </small>
                            </div>
                            <div class="text-center mt-5">
                                <b-button variant="primary" @click.prevent="startPacking">Rozpocznij pakowanie</b-button>
                            </div>
                        </form>
                    </b-tab>
                    <b-tab title="Bielizna i skarpety" :disabled="!hasStarted">
                        <div class="card-columns">
                            <item-card v-for="item in filterByCategories(underwearAndSocks, items)"
                                       :key="item.id"
                                       :item="item"
                                       :container="container"
                                       packing="true"
                                       :picked="isPacked(item)"
                                       @item-toggle="toggleItem($event)"
                            ></item-card>
                        </div>

                        <div class="text-center mt-5">
                            <b-button @click.prevent="tabIndex++">Kontynuuj</b-button>
                        </div>
                    </b-tab>
                    <b-tab title="Ubrania codzienne" :disabled="!hasStarted">
                        <div class="card-columns">
                            <item-card v-for="item in filterByCategories(normalClothes, items)"
                                       :key="item.id"
                                       :item="item"
                                       :container="container"
                                       packing="true"
                                       :picked="isPacked(item)"
                                       @item-toggle="toggleItem($event)"
                            ></item-card>
                        </div>

                        <div class="text-center mt-5">
                            <b-button @click.prevent="tabIndex++">Kontynuuj</b-button>
                        </div>
                    </b-tab>
                    <b-tab title="Ubrania wierzchnie" :disabled="!hasStarted">
                        <div class="card-columns">
                            <item-card v-for="item in filterByCategories(outsideClothes, items)"
                                       :key="item.id"
                                       :item="item"
                                       :container="container"
                                       packing="true"
                                       :picked="isPacked(item)"
                                       @item-toggle="toggleItem($event)"
                            ></item-card>
                        </div>

                        <div class="text-center mt-5">
                            <b-button @click.prevent="tabIndex++">Kontynuuj</b-button>
                        </div>
                    </b-tab>
                    <b-tab title="Buty, akcesoria i inne" :disabled="!hasStarted">
                        <div class="card-columns">
                            <item-card v-for="item in filterByCategories(shoesAndOthers, items)"
                                       :key="item.id"
                                       :item="item"
                                       :container="container"
                                       packing="true"
                                       :picked="isPacked(item)"
                                       @item-toggle="toggleItem($event)"
                            ></item-card>
                        </div>

                        <div class="text-center mt-5">
                            <b-button @click.prevent="tabIndex++">Kontynuuj</b-button>
                        </div>
                    </b-tab>
                    <b-tab title="Koniec" :disabled="!hasStarted">
                        <transition-group name="pop-in" tag="div" class="card-columns">
                            <item-card v-for="item in packed"
                                       :key="item.id"
                                       :item="item"
                                       :container="container"
                                       packing="true"
                                       picked="true"
                                       @item-toggle="toggleItem($event)"
                            ></item-card>
                        </transition-group>

                        <b-button v-on:click="finishPacking()" variant="primary">Zatwierdź wybór i przejdź do spakowanych rzeczy</b-button>
                        <b-button @click.prevent="cancelPacking()">Porzuć kreator</b-button>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>
<script src="./component.ts" lang="ts"></script>
