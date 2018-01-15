export const getDetails = ({ details }) => details

export const getPlans = ({ plans }) => plans

// filter the repeated data(ddds)
// i used origin property, but could be destiny too
export const getDDD = ({ prices }) => {
  const ddds = prices.map(item => item.origin)

  return [...new Set(ddds)]
}

// optimizes array for search performance
export const getPrices = ({ prices }) =>
  prices
    .reduce((acc, { origin, destiny, price }) => {
      return Object.assign(acc, { [`${origin}-${destiny}`]: price })
    }, {})
