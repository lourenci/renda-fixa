import BaseCalculator from './BaseCalculator'
import { annualRateToDaily } from 'Services/financialMath'

const taxes = ['IOFTax', 'IncomeTax']

const bovespaTax = (amount, days) => Number((amount * annualRateToDaily(0.003, 10) * days).toFixed(2))

class TesouroDiretoCalculator extends BaseCalculator {
  constructor (amount, days, dailyRate) {
    super(amount, days, dailyRate, taxes)
  }

  amountTaxes () {
    return bovespaTax(this.amount, this.days) + super.amountTaxes()
  }
}

export default TesouroDiretoCalculator
