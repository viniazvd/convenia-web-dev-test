import { details, plans, prices } from '../services'
import * as types from './mutations-types'

export const setDetails = async ({ commit }) => {
  const { data } = await details()
  commit(types.SET_DETAILS, data)
}

export const setPlans = async ({ commit }) => {
  const { data } = await plans()
  commit(types.SET_PLANS, data)
}

export const setPrices = async ({ commit }) => {
  const { data } = await prices()
  commit(types.SET_PRICES, data)
}
