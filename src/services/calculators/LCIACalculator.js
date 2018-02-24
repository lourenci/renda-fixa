import InvestmentCalculator from './InvestmentCalculator'

const taxes = ['IOFTax']

class LCIACalculator extends InvestmentCalculator {
  constructor (amount, days, annualRate) {
    super(amount, days, annualRate, taxes)
  }
}

export default LCIACalculator
