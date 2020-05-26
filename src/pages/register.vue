<template>
  <q-page class="register-page flex flex-center">
    <q-card class="register-page__form-card">
      <span class="register-page__form-title">Proto Dev</span>
      <q-input filled v-model="email" label="Email" class="register-page__form-input"/>
      <q-input filled v-model="password" label="Password" class="register-page__form-input"/>
      <q-input filled v-model="confirmPassword" label="Confirm Password" class="register-page__form-input"/>
      <div class="flex">
        <q-btn color="black" label="Register" />
        <q-btn label="Login" flat @click="$router.push('/login')"/>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
}
</script>

<style lang="scss">
.register-page {
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