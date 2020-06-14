<template>
  <q-page class="profile-page flex column flex-center">
    <q-card class="profile-page__profile-card">
      <q-avatar class="profile-page__avatar">
        <Avatar :displayName="user.displayName" />
      </q-avatar>
      <span class="profile-page__display-name">{{ user.displayName }}</span>
    </q-card>
    <span class="profile-page__coming-soon">Coming Soon!</span>
    <q-btn
      color="negative"
      class="profile-page__delete-account-button"
      @click="updateDisplayDeleteProfileConfirmationModal(true)"
    >
      Delete Account
    </q-btn
    >
  </q-page>
</template>

<script>
import { userGetters, interfaceActions } from "../store/helpers";
import Avatar from "../components/avatar.vue";
export default {
  components: {
    Avatar
  },
  computed: {
    ...userGetters
  },
  methods: {
    ...interfaceActions
  }
};
</script>

<style lang="scss">
.profile-page {
  &__profile-card {
    width: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 767px) {
      width: 90%;
    }
  }

  &__avatar {
    margin-bottom: 1rem;
  }

  &__display-name {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &__coming-soon {
    margin-top: 2rem;
    font-weight: 700;
    font-size: 2rem;
  }

  &__delete-account-button {
    margin-top: 2rem;
  }
}
</style>
