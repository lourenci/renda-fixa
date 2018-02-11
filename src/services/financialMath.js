const DECIMAL_PLACES = 6

const truncNumber = (number, decimalPlaces) => {
  const regex = new RegExp(`[0-9]*\.[0-9]{${decimalPlaces}}`)
  return number.toString().match(regex) && Number(number.toString().match(regex)[0])
}

export const annualRateToDaily = annualRate => {
  return truncNumber(Math.pow(1 + annualRate, 1 / 360) - 1, DECIMAL_PLACES)
}

export const dailyRateToAnnual = dailyRate => {
  return truncNumber(Math.pow(1 + dailyRate, 360) - 1, DECIMAL_PLACES)
}

export const periodRateToAnnualDaily = (period, rate) => {
  return truncNumber(Math.pow(1 + rate, 360 / period) - 1, DECIMAL_PLACES)
}

export const rate = (presentValue, futureValue, period) => {
  return truncNumber(Math.pow(futureValue / presentValue, 1 / period) - 1, DECIMAL_PLACES)
}

export const futureValue = (amount, period, rate) => {
  const futureValue = amount * Math.pow(1 + rate, period)
  return Number(futureValue.toFixed(2))
}
