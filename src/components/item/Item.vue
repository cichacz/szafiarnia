<template>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            <transition name="slide-from-top">
                <div v-if="loading" key="loading" class="position-absolute w-100 preloader">
                    <div class="text-center content">
                        <h3>Trwa ładowanie danych</h3>
                        <div class="sk-cube-grid">
                            <div class="sk-cube sk-cube1"></div>
                            <div class="sk-cube sk-cube2"></div>
                            <div class="sk-cube sk-cube3"></div>
                            <div class="sk-cube sk-cube4"></div>
                            <div class="sk-cube sk-cube5"></div>
                            <div class="sk-cube sk-cube6"></div>
                            <div class="sk-cube sk-cube7"></div>
                            <div class="sk-cube sk-cube8"></div>
                            <div class="sk-cube sk-cube9"></div>
                        </div>
                    </div>
                </div>
                <div v-else key="form" class="content clearfix">
                    <h3 v-if="!loading"><ribbon>{{ formTitle }}</ribbon></h3>
                    <div v-if="saved || updated" class="alert alert-success" role="alert">
                        Poprawnie zapisano
                    </div>
                    <div v-if="error" class="alert alert-warning" role="alert">
                        {{ error }}
                    </div>
                    <form novalidate @submit.prevent="addItem">
                        <div class="row">
                            <div class="col-md-5">
                                <label class="input-file-wrapper" :class="{'has-image': currentItem.image}" title="Wybierz zdjęcie">
                                    <img :src="currentItem.image" class="img-fluid"/>
                                    <input type="file" name="image" accept="image/*" @change="previewImage($event.target)"/>
                                </label>
                            </div>
                            <div class="col-md-7">
                                <div class="form-group">
                                    <label for="name">Nazwa</label>
                                    <input v-model="currentItem.name" v-validate="'required|min:3'" name="nazwa" id="name" class="form-control" placeholder="Nazwa przedmiotu">
                                    <small class="form-text text-danger" v-if="errors.has('nazwa')">
                                        {{ errors.first('nazwa') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="subcategory">Własna kategoria</label>
                                    <input v-model="currentItem.subcategory"  id="subcategory" class="form-control" placeholder="Nazwa kategorii">
                                </div>
                            </div>
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
                        <div>
                            <button ref="saveBtn" class="btn btn-success">
                                <template v-if="!id">Dodaj</template>
                                <template v-else>Zapisz zmiany</template>
                            </button>
                            <button @click.prevent="cancel" class="btn btn-secondary">Powrót</button>
                        </div>
                    </form>
                </div>
            </transition>
        </div>
    </div>
</template>

<script src="./component.ts" lang="ts"></script>
<style src="./style.less" scoped lang="less"></style>
