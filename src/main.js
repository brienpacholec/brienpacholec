import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Layout from '~/layouts/Layout.vue'
import theme from '~/constants/theme'
import '@mdi/font/css/materialdesignicons.css'
import '~/assets/styles/app.scss'

export default function (Vue, { router, appOptions, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Raleway'
  })

  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(theme)

  Vue.component('Layout', Layout)
}
