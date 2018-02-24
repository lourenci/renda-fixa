import InvestmentCalculator from 'Services/calculators/InvestmentCalculator'
import { annualRateToDaily } from 'Services/financialMath'

const taxes = ['IOFTax', 'IncomeTax']

const bovespaTax = (amount, days) => Number((amount * annualRateToDaily(0.003, 10) * days).toFixed(2))

class TesouroDiretoCalculator extends InvestmentCalculator {
  constructor (amount, days, annualRate) {
    super(amount, days, annualRate, taxes)
  }

  amountTaxes () {
    return bovespaTax(this.amount, this.days) + super.amountTaxes()
  }
}

export default TesouroDiretoCalculator
