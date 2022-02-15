<template>
  <div>
    <h1>О сервисе</h1>
      <p>
        Приветствуем вас дорогой гость! Чтобы просмотреть подробную информацию данного сервиса пожалуйста <router-link to="/register">зарегестрируйтесь</router-link> или выполните <router-link to="/login">вход!</router-link>
      </p>
      <p>
        Без действующей учетной записи - раздел "Инфо" будет заблокирован!
      </p>
  </div>
</template>

<style scoped>
  p {
    margin: 20px;
  }

  a {
    font-weight: bold;
  }
</style>
