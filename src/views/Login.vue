<template>
  <div>
    <h3>Форма входа</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="email" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="пароль" v-model="password" />
      </div>
      <button>Выполнить вход</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "info" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style scoped>

input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}

button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}

.error {
  margin-top: 20px;
  color: red;
}
</style>