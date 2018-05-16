<template>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            <div class="content clearfix">
                <h3><ribbon>{{ formTitle }}</ribbon></h3>
                <div v-if="error" class="alert alert-warning" role="alert">
                    {{ error }}
                </div>
                <form novalidate @submit.prevent="addItem">
                    <div class="form-group">
                        <label for="name">Nazwa</label>
                        <input v-model="currentItem.name" id="name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="color">Grupa kolorów</label>
                        <select v-model="currentItem.colourGroup" id="color" class="form-control">
                            <option value="" disabled>-- wybierz --</option>
                            <option v-for="(i,k) in colorGroup" v-if="isNaN(k)" :key="i" :value="i">{{ k }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="color">Kategoria prania</label>
                        <select v-model="currentItem.laundryCategory" id="color" class="form-control">
                            <option value="" disabled>-- wybierz --</option>
                            <option v-for="(i,k) in laundryCategory" v-if="isNaN(k)" :key="i" :value="i">{{ k }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="color">Kategia pakowania</label>
                        <select v-model="currentItem.packingCategory" id="color" class="form-control">
                            <option value="" disabled>-- wybierz --</option>
                            <option v-for="(i,k) in packingCategory" v-if="isNaN(k)" :key="i" :value="i">{{ k }}</option>
                        </select>
                    </div>
                    <div>
                        <button class="btn btn-success">Dodaj</button>
                        <button @click.prevent="cancel" class="btn btn-secondary">Anuluj</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
