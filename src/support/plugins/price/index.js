import * as $price from '../../../services/price'

const install = Vue => {
  Object.defineProperties(Vue.prototype, {
    $price: {
      get () {
        return $price
      }
    }
  })
}

export default { install }
