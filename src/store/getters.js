export const getDetails = ({ details }) => details

export const getPlans = ({ plans }) => plans

export const getArrayPrices = ({ prices }) => prices

// optimizes array for search performance
export const getPrices = ({ prices }) =>
  prices
    .reduce((acc, { origin, destiny, price }) => {
      return Object.assign(acc, { [`${origin}-${destiny}`]: price })
    }, {})
