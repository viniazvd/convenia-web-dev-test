import * as $plan from '../../../services/plan'

const install = Vue => {
  Object.defineProperties(Vue.prototype, {
    $plan: {
      get () {
        return $plan
      }
    }
  })
}

export default { install }
