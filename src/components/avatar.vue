<template>
  <div class="avatar rounded">
    <span>{{ displayInitials }}</span>
  </div>
</template>

<script>
export default {
  props: {
    displayName: {
      type: String,
      required: true
    }
  },
  computed: {
    displayInitials() {
      const names = this.displayName.split(' ')
      const initials = names.map(name => name.substring(0, 1))
      return initials.join('')
    }
  }
}
</script>

<style lang="scss">
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: darkgrey;
}

.rounded {
  border-radius: 99999px;
}
</style>