<template>
  <v-footer padless class="mt-5">
    <v-card
      tile
      class="white--text text-center align-self-md-stretch"
      width="100%"
      color="secondary"
    >
      <v-card-text>
        <v-btn v-for="social in socials" :key="social.key" :href="social.href" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text raleway">
        {{ new Date().getFullYear() }} — <strong>Brien Pacholec</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  components: {},
  data: () => ({
    socials: [
      {
        key: 'email',
        icon: 'mdi-email-edit',
        href: 'mailto:brienpacholec@gmail.com'
      },
      {
        key: 'linkedin',
        icon: 'mdi-linkedin',
        href: 'https://www.linkedin.com/in/brien-pacholec-a59b6ab4/'
      },
      {
        key: 'instagram',
        icon: 'mdi-instagram',
        href: 'https://www.instagram.com/brienpacholec/'
      },
      {
        key: 'github',
        icon: 'mdi-github',
        href: 'https://github.com/brienpacholec'
      },
    ],
    icons: [
      'mdi-email-edit',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>
