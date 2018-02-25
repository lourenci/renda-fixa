import truncNumber from './helpers/truncNumber'

const PRECISION = 6

export const annualRateToDaily = (annualRate, precision = null) => {
  return truncNumber(Math.pow(1 + annualRate, 1 / 360) - 1, precision || PRECISION)
}

export const dailyRateToAnnual = dailyRate => {
  return truncNumber(Math.pow(1 + dailyRate, 360) - 1, PRECISION)
}

export const rate = (presentValue, futureValue, period) => {
  return truncNumber(Math.pow(futureValue / presentValue, 1 / period) - 1, PRECISION)
}

export const futureValue = (amount, period, rate) => {
  const futureValue = amount * Math.pow(1 + rate, period)
  return Number(futureValue.toFixed(2))
}
