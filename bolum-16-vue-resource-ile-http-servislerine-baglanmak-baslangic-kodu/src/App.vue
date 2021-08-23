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
            <li class="list-group item" v-for="user in users" :key="user.id">
              <span> {{ user.data.userName }}</span>
              <button class="btn btn-xs btn-danger" @click="deleteUser(user.key)">
                Sil
              </button>
            </li>
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
      resource: {},
    };
  },
  methods: {
    deleteUser(key) {
      // this.$http.delete("users/" + key + ".json").then((response) => {
      //   console.log(response);
      // });

      this.$resource("users/" + key + ".json").delete();
    },
    saveUser() {
      // this.$http.post("users.json", { userName: this.userName }).then((response) => {
      //   console.log(response);
      // });
      // https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md
      // this.$resource("users.json").save({}, { userName: this.userName });
      this.resource.kaydet({}, { userName: this.userName });
    },
    getUsers() {
      this.$resource("users.json")
        .get()
        .then((response) => {
          // let responseData = response.body;
          // for (let key in responseData) {
          //   this.users.push(responseData[key]);
          // }
          return response.json();
          console.log(response.body);
        })
        .then((data) => {
          console.log(data);
          for (let key in data.userList) {
            this.users.push({
              key: key,
              data: data.userList[key],
            });
          }
        });
    },
  },
  created() {
    const customActions = {
      kaydet: { method: "POST", url: "users.json" },
    };
    this.resource = this.$resource("users.json", {}, customActions);
  },
};
</script>

<style></style>
