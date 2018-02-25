import InvestmentCalculator from './InvestmentCalculator'

const taxes = ['IOFTax', 'IncomeTax']

class NuCDBCalculator extends InvestmentCalculator {
  constructor (amount, days, annualRate) {
    super(amount, days, annualRate, taxes)
  }
}

export default NuCDBCalculator
