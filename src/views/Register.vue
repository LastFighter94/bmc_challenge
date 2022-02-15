<template>
  <div>
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      <h3>Регистрация</h3>
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="пароль" />
      </div>
      <button type="submit">Зарегестрироваться</button>
    </form>
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
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace({ name: "info" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 18px;
}
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
</style>