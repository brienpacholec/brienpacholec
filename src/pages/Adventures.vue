<template>
  <v-container fill-height class="d-flex flex-column">
    <h1><span>Who is</span>&nbsp;<span class="text-color-main">Brien Pacholec?</span></h1>
    <span v-html="this.$page.body.edges[0].node.content" class="html"></span>
    <span v-html="this.$page.body.edges[0].node.content" class="html"></span>
    <span v-html="this.$page.body.edges[0].node.content" class="html"></span>
  </v-container>
</template>

<page-query>
  query pageContent{
    body: allPageContent (filter: { fileInfo: {name : { eq: "about" }}}){
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
export default {
  metaInfo: {
    title: 'Navbar'
  }
}
</script>
