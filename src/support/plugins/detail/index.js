import * as $detail from '../../../services/detail'

const install = Vue => {
  Object.defineProperties(Vue.prototype, {
    $detail: {
      get () {
        return $detail
      }
    }
  })
}

export default { install }
