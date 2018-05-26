<template>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            <div class="content clearfix">
                <h3><ribbon>{{ formTitle }}</ribbon></h3>
                <div v-if="saved || updated" class="alert alert-success" role="alert">
                    Poprawnie zapisano
                </div>
                <div v-if="error" class="alert alert-warning" role="alert">
                    {{ error }}
                </div>
                <form novalidate @submit.prevent="addItem">
                    <div class="form-group">
                        <label for="name">Nazwa</label>
                        <input v-model="currentItem.name" v-validate="'required|min:3'" name="nazwa" id="name" class="form-control" placeholder="Nazwa przedmiotu">
                        <small class="form-text text-danger" v-if="errors.has('nazwa')">
                        {{ errors.first('nazwa') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="color">Grupa kolorów</label>
                        <select v-model="currentItem.colourGroup" v-validate="'required'" name="grupa kolorów" id="color" class="form-control">
                            <option value="" disabled>-- wybierz --</option>
                            <option v-for="(i,k) in colorGroup" v-if="isNaN(k)" :key="i" :value="i">{{ $t('ColorGroup.' + k) }}</option>
                        </select>
                         <small class="form-text text-danger" v-if="errors.has('grupa kolorów')">
                        {{ errors.first('grupa kolorów') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="color">Kategoria prania</label>
                        <select v-model="currentItem.laundryCategory" v-validate="'required'" name="kategoria prania" id="color" class="form-control">
                            <option value="" disabled>-- wybierz --</option>
                            <option v-for="(i,k) in laundryCategory" v-if="isNaN(k)" :key="i" :value="i">{{ $t('LaundryCategory.' + k) }}</option>
                        </select>
                        <small class="form-text text-danger" v-if="errors.has('kategoria prania')">
                        {{ errors.first('kategoria prania') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="color">Kategoria pakowania</label>
                        <select v-model="currentItem.packingCategory" v-validate="'required'" name="kategoria pakowania" id="color" class="form-control">
                            <option value="" disabled>-- wybierz --</option>
                            <option v-for="(i,k) in packingCategory" v-if="isNaN(k)" :key="i" :value="i">{{ $t('PackingCategory.' + k) }}</option>
                        </select>
                            <small class="form-text text-danger" v-if="errors.has('kategoria pakowania')">
                        {{ errors.first('kategoria pakowania') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="subcategory">Własna kategoria</label>
                        <input v-model="currentItem.subcategory"  id="subcategory" class="form-control" placeholder="Nazwa kategorii">
                    </div>
                        <div>
                            <b-form-file v-model="file" :state="Boolean(file)" placeholder="Wybierz zdjęcie"></b-form-file>
                            <div class="mt-3">Wybrane zdjęcie: {{file && file.name}}
                        </div>
                        <button v-if="!id" class="btn btn-success">Dodaj</button>
                        <button v-if="id" class="btn btn-success">Zapisz zmiany</button>
                        <button @click.prevent="cancel" class="btn btn-secondary">Anuluj</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
