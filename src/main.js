import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBeoK7QdUZDzbQDav4y1WqabcpHYAqlXgc",
  authDomain: "vue-2-auth-d27ff.firebaseapp.com",
  projectId: "vue-2-auth-d27ff",
  storageBucket: "vue-2-auth-d27ff.appspot.com",
  messagingSenderId: "726352686351",
  appId: "1:726352686351:web:5c346344cf4a388b81a27a"
};

firebase.initializeApp(firebaseConfig)

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});