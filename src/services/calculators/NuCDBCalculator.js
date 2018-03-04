import BaseCalculator from './BaseCalculator'

const taxes = ['IOFTax', 'IncomeTax']

class NuCDBCalculator extends BaseCalculator {
  constructor (amount, days, dailyRate) {
    super(amount, days, dailyRate, taxes)
  }
}

export default NuCDBCalculator
