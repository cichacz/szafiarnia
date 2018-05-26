<template>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            <div class="content clearfix">
                <h3><ribbon>Kreator Pakowania</ribbon></h3>
                        <b-card no-body>
                        <b-tabs pills card vertical>
                            <b-tab title="Start" active>
                                  <form>
                                    <div class="form-group">
                                        <label for="travelLength">Witamy w kreatorze pakowania przedmiotów w Szafiarni. Wprowadź liczbę dni zaplanowanego wyjazdu:</label>
                                        <input type="number" class="form-control" id="travelLength" aria-describedby="emailHelp" placeholder="Liczba dni" required>
                                        <small id="numberHelp" class="form-text text-muted">Liczba dni musi zostać wskazana wartością liczbową</small>
                                    </div>
                                  </form>
                            </b-tab>
                            <b-tab title="Bielizna i skarpety">
                            Tab Contents 2
                            </b-tab>
                            <b-tab title="Ubrania codzienne">
                            Tab Contents 3
                            </b-tab>
                            <b-tab title="Ubrania wierzchnie">
                            Tab Contents 3
                            </b-tab>
                            <b-tab title="Buty, akcesoria i inne">
                            Tab Contents 3
                            </b-tab>
                            <b-tab title="Koniec">
                                <b-button>Zatwierdź wybór i przejdź do spakowanych rzeczy</b-button>
                                <b-button>Porzuć kreator</b-button>
                            </b-tab>
                        </b-tabs>
                        </b-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./component.ts" lang="ts"></script>
