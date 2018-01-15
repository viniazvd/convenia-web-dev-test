import * as types from './mutations-types'

export default {
  [types.SET_DETAILS] (state, details) {
    state.details = details
  },
  [types.SET_PLANS] (state, plans) {
    state.plans = plans
  },
  [types.SET_PRICES] (state, prices) {
    state.prices = prices
  }
}
