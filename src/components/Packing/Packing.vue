<template>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            <div class="content clearfix">
                <h3><ribbon>Kreator Pakowania</ribbon></h3>    
                    </div>
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-start-tab" data-toggle="pill" href="#v-pills-start" role="tab" aria-controls="v-pills-start" aria-selected="true">Start</a>
                                <a class="nav-link" id="v-pills-underwear-tab" data-toggle="pill" href="#v-pills-underwear" role="tab" aria-controls="v-pills-underwear" aria-selected="false">Bielizna i skarpety</a>
                                <a class="nav-link" id="v-pills-daily-tab" data-toggle="pill" href="#v-pills-daily" role="tab" aria-controls="v-pills-daily" aria-selected="false">Ubrania codzienne</a>
                                <a class="nav-link" id="v-pills-outerwear-tab" data-toggle="pill" href="#v-pills-outerwear" role="tab" aria-controls="v-pills-outerwear" aria-selected="false">Ubrania wierzchnie</a>                               
                                <a class="nav-link" id="v-pills-other-tab" data-toggle="pill" href="#v-pills-other" role="tab" aria-controls="v-pills-other" aria-selected="false">Buty, akcesoria i inne</a>
                                <a class="nav-link" id="v-pills-end-tab" data-toggle="pill" href="#v-pills-end" role="tab" aria-controls="v-pills-end" aria-selected="false">Koniec</a>
                        </div>
                                <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-start" role="tabpanel" aria-labelledby="v-pills-start-tab">
                                    <h2>Krok 1 z 3</h2>
                                        <div> Witamy w kreatorze pakowania przedmiotów w Szafiarni.</div>
                                        <form novalidate @submit.prevent="long" class="text-center">
                                            <div class="form-group">
                                                <input v-model="text" type="text" class="form-control" placeholder="Wprowadź długość podrózy">
                                            </div>
                                        <button class="btn btn-success">Dalej</button>
                                        
                                        </form>
                                </div>
                                <div>
                                <div class="tab-pane fade" id="v-pills-underwear" role="tabpanel" aria-labelledby="v-pills-underwear-tab">...</div>
                                <div class="tab-pane fade" id="v-pills-daily" role="tabpanel" aria-labelledby="v-pills-daily-tab">...</div>
                                <div class="tab-pane fade" id="v-pills-outerwear" role="tabpanel" aria-labelledby="v-pills-outerwear-tab">...</div>
                                <div class="tab-pane fade" id="v-pills-other" role="tabpanel" aria-labelledby="v-pills-other-tab">...</div>
                                <div class="tab-pane fade" id="v-pills-end" role="tabpanel" aria-labelledby="v-pills-end-tab">...</div>

            </div>                   
        </div>
    </div>   
</template>
<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
