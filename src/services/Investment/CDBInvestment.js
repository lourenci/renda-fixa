import NuCDBCalculator from './calculators/NuCDBCalculator'
import { annualRateToDaily } from 'Services/financialMath'
import { cdi } from 'Services/indexes'

class CDBInvestment {
  constructor (amount, days, profitibilityOfCDI) {
    this.amount = amount
    this.days = days
    this.profitibilityOfCDI = profitibilityOfCDI
  }

  calculator () {
    return new NuCDBCalculator(this.amount, this.days, annualRateToDaily(cdi() * this.profitibilityOfCDI))
  }
}

export default CDBInvestment
