import NuCDBCalculator from './calculators/NuCDBCalculator'
import { annualRateToDaily } from 'Services/financialMath'
import { cdi } from 'Services/indexes'

class NuInvestment {
  constructor (amount, days) {
    this.amount = amount
    this.days = days
  }

  calculator () {
    return new NuCDBCalculator(this.amount, this.days, annualRateToDaily(cdi()))
  }
}

export default NuInvestment
