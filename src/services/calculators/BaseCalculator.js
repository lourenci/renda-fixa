import { dailyRateToAnnual, futureValue, rate } from '../financialMath'
import { taxClasses } from './taxes'

class BaseCalculator {
  constructor (amount, days, dailyRate, taxesToDeduct) {
    this.amount = amount
    this.days = days
    this.dailyRate = dailyRate
    this.taxesToDeduct = taxesToDeduct
  }

  grossAmount () {
    return futureValue(this.amount, this.days, this.dailyRate)
  }

  amountTaxes () {
    const grossProfit = this.grossAmount() - this.amount
    const netAmount = this.taxesToDeduct.reduce((sum, tax) => {
      return sum - new taxClasses[tax](this.days).percentOfValue(sum)
    }, grossProfit)
    return Number((grossProfit - netAmount).toFixed(2))
  }

  netAmount () {
    return Number((this.grossAmount() - this.amountTaxes()).toFixed(2))
  }

  netPercentYear () {
    const dailyRate = rate(this.amount, this.netAmount(), this.days)
    return Number(dailyRateToAnnual(dailyRate).toFixed(4))
  }
}

export default BaseCalculator
