import Vue from 'vue'
import store from './store'

// Defina false para previnir a exibição da dica sobre o modo de produção ao iniciar o Vue.
Vue.config.productionTip = false

// pluggins
import HttpPlugin from './support/plugins/http'
import DetailPlugin from './support/plugins/detail'
import PlanPlugin from './support/plugins/plan'
import PricePlugin from './support/plugins/price'

// registering pluggins
Vue.use(HttpPlugin)
Vue.use(DetailPlugin)
Vue.use(PlanPlugin)
Vue.use(PricePlugin)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  store,
  render: h => h(require('./TheRoot'))
})
