import InvestmentCalculator from './InvestmentCalculator'

const taxes = ['IOFTax', 'IncomeTax']

class CDBCalculator extends InvestmentCalculator {
  constructor (amount, days, annualRate) {
    super(amount, days, annualRate, taxes)
  }
}

export default CDBCalculator
