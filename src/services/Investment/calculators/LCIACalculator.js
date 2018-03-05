import BaseCalculator from './BaseCalculator'

const taxes = ['IOFTax']

class LCIACalculator extends BaseCalculator {
  constructor (amount, days, dailyRate) {
    super(amount, days, dailyRate, taxes)
  }
}

export default LCIACalculator
