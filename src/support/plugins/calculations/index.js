import * as $services from '../../../services'

const install = Vue => {
  Object.defineProperties(Vue.prototype, {
    $services: {
      get () {
        return $services
      }
    }
  })
}

export default { install }
