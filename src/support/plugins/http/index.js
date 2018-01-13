import * as $http from '../../http'

const install = Vue => {
  Object.defineProperties(Vue.prototype, {
    $http: {
      get () {
        return $http
      }
    }
  })
}

export default { install }
