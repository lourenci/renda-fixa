const truncNumber = (number, decimalPlaces) => {
  const regex = new RegExp(`[0-9]*\.[0-9]{${decimalPlaces}}`)
  return number.toString().match(regex) ? Number(number.toString().match(regex)[0]) : number
}

export const annualRateToDaily = (annualRate) => {
  const DECIMAL_PLACES = 6
  return truncNumber(Math.pow(1 + annualRate, 1 / 360) - 1, DECIMAL_PLACES)
}

export const futureValue = (amount, periods, rate) => {
  const futureValue = Array.from({ length: periods }).reduce(amount => {
    return amount * (1 + rate)
  }, amount)
  return Number(futureValue.toFixed(2))
}
