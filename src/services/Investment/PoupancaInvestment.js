import PoupancaCalculator from './calculators/PoupancaCalculator'
import { annualRateToDaily } from 'Services/financialMath'
import { selic } from 'Services/indexes'

const poupancaDailyRate = () => {
  const selicIndex = selic()
  return (selicIndex > 0.085 ? 0.000166 : annualRateToDaily(selicIndex * 0.7))
}

class PoupancaInvestment {
  constructor (amount, days) {
    this.amount = amount
    this.days = days
  }

  calculator () {
    return new PoupancaCalculator(this.amount, this.days, poupancaDailyRate())
  }
}

export default PoupancaInvestment
