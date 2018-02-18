import { annualRateToDaily, dailyRateToAnnual, futureValue, rate } from 'Services/financialMath'
import IncomeTax from '../taxes/IncomeTax'
import IOFTax from '../taxes/IOFTax'

const taxClasses = { IncomeTax, IOFTax }

class InvestmentCalculator {
  constructor (amount, days, annualRate, taxesToDeduct) {
    this.amount = amount
    this.days = days
    this.annualRate = annualRate
    this.taxesToDeduct = taxesToDeduct
  }

  grossAmount () {
    return futureValue(this.amount, this.days, annualRateToDaily(this.annualRate))
  }

  amountTaxes () {
    const grossProfit = this.grossAmount() - this.amount
    const netAmount = this.taxesToDeduct.reduce((sum, tax) => {
      return sum - new taxClasses[tax](this.days).percentOfValue(sum)
    }, grossProfit)
    return Number((grossProfit - netAmount).toFixed(2))
  }

  netAmount () {
    return this.grossAmount() - this.amountTaxes()
  }

  netPercentYear () {
    const dailyRate = rate(this.amount, this.netAmount(), this.days)
    return dailyRateToAnnual(dailyRate)
  }
}

export default InvestmentCalculator
