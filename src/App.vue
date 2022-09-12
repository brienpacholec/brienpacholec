<template>
  <v-app>
    <navbar v-if="this.$route.path !== '/'"></navbar>
    <transition name="fade">
      <router-view />
    </transition>
    <bottom></bottom>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Navbar from '~/layouts/Navbar.vue'
import Bottom from '~/layouts/Bottom.vue'

export default {
  components: {
    Navbar,
    Bottom,
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave {
    opacity: 0;
}

</style>
