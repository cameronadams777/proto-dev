<template>
  <q-page class="register-page flex flex-center">
    <q-card class="register-page__form-card">
      <img src="../assets/logo.png" class="register-page__form-logo" />
      <span class="register-page__form-title">Proto Dev</span>
      <q-input
        v-model="registrationForm.name"
        label="Name"
        class="register-page__form-input"
        filled
      />
      <q-input
        v-model="registrationForm.email"
        label="Email"
        type="email"
        class="register-page__form-input"
        filled
      />
      <q-input
        v-model="registrationForm.password"
        label="Password"
        type="password"
        class="register-page__form-input"
        filled
      />
      <q-input
        v-model="registrationForm.confirmPassword"
        label="Confirm Password"
        type="password"
        class="register-page__form-input"
        filled
      />
      <div class="flex">
        <q-btn color="black" label="Register" @click="attemptToRegisterNewUser"/>
        <q-btn label="Login" flat @click="$router.push('/login')" />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { userActions } from '../store/helpers'
export default {
  data() {
    return {
      registrationForm: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    ...userActions,
    async attemptToRegisterNewUser() {
      try {
        const payload = {
          name: this.registrationForm.name,
          email: this.registrationForm.email,
          password: this.registrationForm.password
        }
        this.registerNewUser(payload)
      } catch(error) {
        this.$q.notify({ color: 'danger', message: error.message })
      }
    }
  }
};
</script>

<style lang="scss">
.register-page {
  &__form-card {
    padding: 2rem;
    width: 25%;

    @media only screen and (max-width: 640px){
      width: 75%;
    }

    @media only screen and (max-width: 1024px){
      width: 75%;
    }
  }

  &__form-logo {
    width: 100px !important;
    margin: 0 auto;
    margin-bottom: 1rem;
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
