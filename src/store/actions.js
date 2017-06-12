import axios from 'axios'

const API_ROOT = 'https://private-979ab-testefrontend.apiary-mock.com/ddd/'

axios.defaults.baseURL = API_ROOT

/**
 * Lista todos os planos
 */
export const getPlans = ({ commit }) => {
  return axios
    .get('plans')
    .then(response => {
      commit('SET_PLANS', response.data.data)
    })
    .catch(error => { console.log(error) })
}

/**
 * Lista a tabela de preços
 */
export const getPrices = ({ commit }) => {
  return axios
    .get('prices')
    .then(response => {
      commit('SET_PRICES', response.data.data)
    })
    .catch(error => { console.log(error) })
}

/**
 * Lista os nomes das cidades de cada DDD
 */
export const getDetails = ({ commit }) => {
  return axios
    .get('details')
    .then(response => {
      commit('SET_DETAILS', response.data.data)
    })
    .catch(error => { console.log(error) })
}
