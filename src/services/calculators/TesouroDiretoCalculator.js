import InvestmentCalculator from 'Services/calculators/InvestmentCalculator'
import { annualRateToDaily } from 'Services/financialMath'

class TesouroDiretoCalculator extends InvestmentCalculator {
  netAmount () {
    return this.grossAmount() - this.bovespaTax() - this.amountTaxes()
  }

  bovespaTax () {
    return Number((this.amount * annualRateToDaily(0.003, 10) * this.days).toFixed(2))
  }
}

export default TesouroDiretoCalculator
