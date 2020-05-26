<template>
  <q-page class="login-page flex flex-center">
    <q-card class="login-page__form-card">
      <span class="login-page__form-title">Proto Dev</span>
      <q-input filled v-model="email" label="Email" class="login-page__form-input"/>
      <q-input filled v-model="password" label="Password" class="login-page__form-input"/>
      <div class="flex">
        <q-btn color="black" label="Login" />
        <q-btn label="Register" flat @click="$router.push('/register')"/>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style lang="scss">
.login-page {
  &__form-card {
    padding: 2rem;
    width: 25%;
  }

  &__form-title {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  &__form-input {
    margin-bottom: 1rem;
  }
}
</style>