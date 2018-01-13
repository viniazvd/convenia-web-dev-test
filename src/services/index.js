import http from '../support/http'

export const details = () => http.get('details')

export const plans = () => http.get('plans')

export const prices = () => http.get('prices')

export const calculationWithPlan = (plan, minuteSelected, prices, priceBetween) => {
  if (minuteSelected < plan) return '-'

  const punishment = '0.10'
  const timePaid = minuteSelected - plan
  const normalPrice = prices[priceBetween()] * timePaid

  return (normalPrice + parseFloat(normalPrice) * parseFloat(punishment)).toFixed(2)
}

export const calculationWithoutPlan = (originSelected, destinySelected, minuteSelected, prices, priceBetween) => {
  if (originSelected && destinySelected && minuteSelected) {
    if (!prices[priceBetween()]) return '-'
    return 'R$ ' + (prices[priceBetween()] * minuteSelected).toFixed(2)
  }
  return '-'
}
