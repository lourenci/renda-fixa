import BaseCalculator from 'Services/calculators/BaseCalculator'

class PoupancaCalculator extends BaseCalculator {
  constructor (amount, days, dailyRate) {
    super(amount, days, dailyRate, [])
  }
}

export default PoupancaCalculator
