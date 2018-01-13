import { details, plans, prices } from '../services'
import * as types from './mutations-types'

export const setDetails = ({ commit }) => {
  return details()
    .then(res => commit(types.SET_DETAILS, res.data.data))
    .catch(error => Promise.reject(error))
}

export const setPlans = ({ commit }) => {
  return plans()
    .then(res => commit(types.SET_PLANS, res.data.data))
    .catch(error => Promise.reject(error))
}

export const setPrices = ({ commit }) => {
  return prices()
    .then(res => commit(types.SET_PRICES, res.data.data))
    .catch(error => Promise.reject(error))
}
