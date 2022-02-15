<template>
  <div id="app">
    <top-header></top-header>
    <div id="nav">
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О сервисе</router-link> |
      <router-link to="/register">Регистрация</router-link> |
      <router-link to="/login" >Вход</router-link> |
      <router-link to="/info">Инфо</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Top-Header";
export default {
  components: {
    "top-header": Header
  }
};
</script>  

<style scoped>

#app {
  text-align: center;
  color: #2c3e50;
  font-size: 15pt;
}

#nav {
  padding: 30px;
}

</style>
