<template>
  <q-page class="profile-page flex flex-center">
    <q-card class="profile-page__profile-card">
      <q-avatar class="profile-page__avatar">
        <Avatar :displayName="user.displayName"/>
      </q-avatar>
      <span class="profile-page__display-name">{{ user.displayName }}</span>
    </q-card>
  </q-page>
</template>

<script>
import { userGetters } from '../store/helpers';
import Avatar from '../components/avatar.vue';
export default {
  components: {
    Avatar
  },
  computed: {
    ...userGetters
  }
}
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
}
</style>