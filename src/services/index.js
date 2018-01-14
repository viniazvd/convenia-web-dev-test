import http from '../support/http'

export const details = () => http.get('details')

export const plans = () => http.get('plans')

export const prices = () => http.get('prices')

export const calculationWithPlan = (plan, minuteSelected, prices, priceBetween) => {
  // if the selected minute is smaller than the plan
  // the call is free
  if (minuteSelected < plan) return '-'

  // minutes to be paid (minutes - plan)
  const timePaid = minuteSelected - plan

  // get the normal price
  // prices[priceBetween()] = access the normal price rate
  // tax + time to be paid
  const normalPrice = prices[priceBetween()] * timePaid

  // value of punishment
  const punishment = '0.10'

  // calculates the percentage
  const punishmentValue = normalPrice * punishment

  // calculate the normal price + punishment percentage
  // and formats the code
  const result = (normalPrice + punishmentValue).toFixed(2)

  return result
}

export const calculationWithoutPlan = (originSelected, destinySelected, minuteSelected, prices, priceBetween) => {
  // if all inputs have been selected
  if (originSelected && destinySelected && minuteSelected) {
    // checks if exist imposts
    if (!prices[priceBetween()]) return '-'

    // tax + minutes
    // and formats the code
    const result = (prices[priceBetween()] * minuteSelected).toFixed(2)

    return `R$ ${result}`
  }
  return '-'
}
