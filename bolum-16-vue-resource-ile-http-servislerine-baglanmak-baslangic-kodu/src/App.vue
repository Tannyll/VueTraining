<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName" /><br /><br />
          <button class="btn btn-primary" @click="saveUser">Kaydet</button>
          <button class="btn btn-primary" @click="getUsers">Get</button>
          <hr />
          <ul class="list-group">
          <li class="list-group item" v-for="user in users" :key="user">{{user.userName}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      users: [],
    };
  },
  methods: {
    saveUser() {
      this.$http
        .post(
          "https://gopdestek-c4e3e-default-rtdb.europe-west1.firebasedatabase.app/users.json",
          { userName: this.userName }
        )
        .then((response) => {
          console.log(response);
        });
    },
    getUsers() {
      this.$http
        .get(
          "https://gopdestek-c4e3e-default-rtdb.europe-west1.firebasedatabase.app/users.json"
        )
        .then((response) => {
          let responseData = response.data;
          for(let key in data){
            this.users.push(data[key])
          }
          console.log(response.body);
        });
    },
  },
};
</script>

<style></style>
