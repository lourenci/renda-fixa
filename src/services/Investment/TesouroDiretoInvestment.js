import TesouroDiretoCalculator from './calculators/TesouroDiretoCalculator'
import { annualRateToDaily } from 'Services/financialMath'
import { selic } from 'Services/indexes'

class TesouroDiretoInvestment {
  constructor (amount, days) {
    this.amount = amount
    this.days = days
  }

  calculator () {
    return new TesouroDiretoCalculator(this.amount, this.days, annualRateToDaily(selic()))
  }
}

export default TesouroDiretoInvestment
