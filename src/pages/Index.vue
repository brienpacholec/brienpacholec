<template>
  <div class="index-page">
    <v-container>
      <v-row
        class="fill-height"
        align-content="center"
      >
        <v-col
          cols="12"
        >
          <h1><span>Hey there, I'm</span>&nbsp;<span class="text-color-main">Brien Pacholec</span></h1>

          <vue-typer
            :text='typewriter'
            :repeat='0'
            :shuffle='false'
            initial-action='erasing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='2000'
            :erase-delay='70'
            erase-style='backspace'
            :erase-on-complete='false'
            caret-animation='phase'
            class='raleway'
          ></vue-typer>
        </v-col>
      </v-row>

    </v-container>

    <v-row class="sticky">
      <navbar ></navbar>
    </v-row>

    <v-container>
      <v-row class="fill-height mt-10">
        <v-col cols="12" md="6">
          <h1><span class="text-color-main">About Me</span></h1>
          <span v-html="this.$page.body.edges[0].node.content" class="html"></span>
        </v-col>
        <v-col cols="12" md="6">
          <g-image src="~/assets/imgs/about_2.jpeg" width="500" height="500" quality="100" fit="cover"/>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<page-query>
  query pageContent{
    body: allPageContent (filter: { fileInfo: {name : { eq: "home" }}}){
      edges {
        node {
          id
          content
        }
      }
    }
  }
</page-query>

<script>

import Navbar from '~/layouts/Navbar.vue'
import { VueTyper } from 'vue-typer'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Navbar,
    VueTyper
  },
  data: () => ({
    typewriter: [
      'And I am a web developer.',
      'I love me a cold brewski.',
      'You can find me at the gym or climbing some mountains!',
      'If you can correct my golf swing - please contact me immediately.',
      'And I am a web developer.',
    ]
  }),
}
</script>

<style lang="scss" scoped>
.index-page {
  .fill-height {
    height: 102vh;
  }
  .sticky {
    position: sticky;
    top: 0;
  }
}

</style>
