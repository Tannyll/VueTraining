<template>
  <div class="container">
    <h3 class="text-center mt-3">Vuelidate ile Form Kontrolü</h3>
    <div class="d-flex justify-content-center align-content-center flex-row">
      <div class="card p-4 mt-3 mr-4 shadow">
        <form style="width: 350px" @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>
            <input
              @blur="$v.email.$touch()"
              v-model="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': $v.email.$error }"
              placeholder="E-posta adresini giriniz"
            />
            <small v-if="!$v.email.required" class="form-text text-danger"
              >Zorunlu alan.</small
            >
            <small v-if="!$v.email.email" class="form-text text-danger"
              >Geçersiz email.</small
            >
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input
              v-model="$v.password.$model"
              type="password"
              class="form-control"
              placeholder="Şifrenizi giriniz"
            />

            <small v-if="!$v.password.required" class="form-text text-danger"
              >Zorunlu alan.</small
            >
            <small v-if="!$v.password.numeric" class="form-text text-danger"
              >Şifre sadece rakam olmalı</small
            >

            <small v-if="!$v.password.minLength" class="form-text text-danger"
              >Password minimum {{ $v.password.$params.minLength.min }} olmalı</small
            >
            <small v-if="!$v.password.maxLength" class="form-text text-danger"
              >Password Maksimum {{ $v.password.$params.maxLength.max }} oluşmalaı</small
            >
          </div>
          <div class="form-group">
            <label>Şifre Tekrar</label>
            <input
              v-model="$v.repassword.$model"
              type="password"
              class="form-control"
              placeholder="Şifrenizi tekrar giriniz"
            />
            <small v-if="!$v.repassword.required" class="form-text text-danger"
              >Zorunlu alan.</small
            >
            <small v-if="!$v.repassword.numeric" class="form-text text-danger"
              >Şifre sadece rakam olmalı</small
            >

            <small v-if="!$v.repassword.minLength" class="form-text text-danger"
              >Password minimum {{ $v.repassword.$params.minLength.min }} olmalı</small
            >
            <small v-if="!$v.repassword.maxLength" class="form-text text-danger"
              >Password Maksimum
              {{ $v.repassword.$params.maxLength.max }} oluşmalaı</small
            >
            <small v-if="!$v.repassword.sameAs" class="form-text text-danger"
              >Şifre Eşit Değil
            </small>
          </div>

          <div class="form-group">
            <label>Yaş</label>
            <input
              v-model="$v.age.$model"
              type="text"
              class="form-control"
              placeholder="Yaşın kaç"
            />
            <small v-if="!$v.age.required" class="form-text text-danger"
              >Zorunlu alan.</small
            >
            <small v-if="!$v.age.numeric" class="form-text text-danger"
              >Yaş sadece rakam olmalı</small
            >
            <small v-if="!$v.age.between" class="form-text text-danger"
              >Yaş aralığı minimum {{ $v.age.$params.between.min }} maksimum
              {{ $v.age.$params.between.max }} olmalı</small
            >
          </div>

          <div class="form-group">
            <label>Kayıt olmak istediğiniz kategori</label>
            <select v-model="$v.selectedCategory.$model" class="form-control">
              <option v-for="category in categories" :value="category" :key="category.id">
                {{ category }}
              </option>
            </select>

            <small v-if="!$v.selectedCategory.checked" class="form-text text-danger"
              >Sadece Yazılım seçebilirsiniz.</small
            >
          </div>

          <a @click="newHobby" class="text-white btn btn-secondary rounded-0 btn-sm"
            >İlgi Alanı Ekle</a
          >
          <small v-if="!$v.hobbies.minLength" class="form-text text-danger"
            >ilgi alanınız en az {{ $v.hobbies.$params.minLength.min }} olmalı</small
          >

          <ul class="list-group mt-3 mb-3 border-0">
            <li
              v-for="(hobby, index) in hobbies"
              :key="hobby.id"
              class="list-group-item d-flex pl-2"
            >
              <input
                type="text"
                class="form-control mr-2"
                :class="{ 'is-invalid': $v.hobbies.$each[index].$error }"
                @blur="$v.hobbies.$each[index].value.$touch()"
                v-model="hobby.value"
              />
              <button
                class="btn btn-sm btn-danger rounded-0"
                @click="hobbies.splice(index, 1)"
              >
                Sil
              </button>
            </li>
          </ul>

          <button class="btn btn-outline-secondary rounded-0">Kaydet</button>
        </form>
      </div>
      <div class="card p-4 mt-3 shadow" style="width: 400px">
        <p>
          {{ $v.selectedCategory }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  sameAs,
  between,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: null,
      age: null,
      password: null,
      repassword: null,
      selectedCategory: null,
      categories: [
        "Yazılım",
        "Donanım",
        "Cloud",
        "Sunucular",
        "Unix",
        "Linux",
        "Mac OS",
        "Windows",
      ],
      hobbies: [],
    };
  },
  validations: {
    email: {
      required,
      email,
      uniq: (arg) => {
        return arg !== "serdar2emirci.com" ? true : false;
      },
    },
    password: {
      required,
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(8),
    },
    repassword: {
      required,
      numeric,
      sameAs: sameAs("password"),
      // sameAs: sameAs((vm) => {
      //   return vm.password + "80";
      // }),
      minLength: minLength(6),
      maxLength: maxLength(8),
    },
    age: {
      required,
      numeric,
      between: between(18, 60),
    },
    selectedCategory: {
      checked(val, vm) {
        return vm.selectedCategory === "Yazılım" ? true : false;
      },
    },
    hobbies: {
      required,
      minLength: minLength(2),
      $each: {
        value: {
          required,
          minLength: minLength(6),
        },
      },
    },
  },
  methods: {
    onSubmit() {
      let form = {
        email: this.email,
        password: this.password,
        category: this.category,
        hobbies: this.hobbies,
      };
      console.log(form);
    },
    newHobby() {
      let hobby = {
        id: Math.random() * Math.random() * 1000,
        value: "",
      };
      this.hobbies.push(hobby);
    },
  },
};
</script>
