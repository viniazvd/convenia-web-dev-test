import * as $services from '../../../domains/speakMore/services'

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
