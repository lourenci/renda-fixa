import { annualRateToDaily, futureValue } from 'Services/financialMath'
import IncomeTax from './taxes/IncomeTax'
import IOFTax from './taxes/IOFTax'

const taxClasses = { IncomeTax, IOFTax }

class InvestmentCalculator {
  constructor (amount, days, annualRate) {
    this.amount = amount
    this.days = days
    this.annualRate = annualRate
  }

  grossAmount () {
    return futureValue(this.amount, this.days, annualRateToDaily(this.annualRate))
  }

  amountTaxes (taxesToDeduct) {
    const grossProfit = this.grossAmount() - this.amount
    const netAmount = taxesToDeduct.reduce((sum, tax) => sum - new taxClasses[tax](this.days).percentOfValue(sum), grossProfit)
    return Number((grossProfit - netAmount).toFixed(2))
  }

  netAmount (taxesToDeduct) {
    return this.grossAmount() - this.amountTaxes(taxesToDeduct)
  }
}

export default InvestmentCalculator
