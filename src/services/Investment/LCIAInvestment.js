import LCIACalculator from './calculators/LCIACalculator'
import { annualRateToDaily } from 'Services/financialMath'
import { cdi } from 'Services/indexes'

class LCIAInvestment {
  constructor (amount, days, profitibilityOfCDI) {
    this.amount = amount
    this.days = days
    this.profitibilityOfCDI = profitibilityOfCDI
  }

  calculator () {
    return new LCIACalculator(this.amount, this.days, annualRateToDaily(cdi() * this.profitibilityOfCDI))
  }
}

export default LCIAInvestment
