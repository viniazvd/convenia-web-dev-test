import Vue from 'vue'
import store from './store'

// Defina false para previnir a exibição da dica sobre o modo de produção ao iniciar o Vue.
Vue.config.productionTip = false

// pluggins
import HttpPlugin from './support/plugins/http'
import ServicesPlugin from './support/plugins/calculations'

// registering pluggins
Vue.use(ServicesPlugin)
Vue.use(HttpPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  store,
  render: h => h(require('./TheRoot'))
})
