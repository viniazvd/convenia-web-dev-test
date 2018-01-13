import http from '../support/http'

export const details = () => http.get('details')

export const plans = () => http.get('plans')

export const prices = () => http.get('prices')
