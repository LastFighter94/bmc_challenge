<template>
    <nav>
      <button v-if="loggedIn" @click="signOut">Выход из учетной записи</button>
        <span v-else>
          <router-link to="/login">
            <button>Войти в учетную запись</button>
          </router-link>
        </span>
    </nav>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
  data() {
    return {
      loggedIn: false
    };
  },
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  }
};
</script>

<style scoped>

nav {
  background-color: rgb(44, 192, 135);
  color: rgb(33, 23, 23);
  width: 100%;
  text-align: right;
  padding: 20px;
}

nav button {
  margin: 10px;
  font-size: 15pt;
  padding: 10px;
  background-color: rgb(4, 121, 82);
  border: none;
}

nav button:hover{
  background-color: rgb(19, 140, 100);
}

</style>