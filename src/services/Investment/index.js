import LCIACalculator from './calculators/LCIACalculator'
import TesouroDiretoCalculator from './calculators/TesouroDiretoCalculator'
import NuCDBCalculator from './calculators/NuCDBCalculator'
import PoupancaCalculator from './calculators/PoupancaCalculator'
import { annualRateToDaily } from 'Services/financialMath'
import { cdi, selic } from 'Services/indexes'

const poupancaDailyRate = () => {
  const selicIndex = selic()
  return (selicIndex > 0.085 ? 0.000166 : annualRateToDaily(selicIndex * 0.7))
}

class Investment {
  constructor (investmentName, amount, days, profitibility = null) {
    this.investmentName = investmentName
    this.amount = amount
    this.days = days
    this.profitibility = profitibility
  }

  calculator () {
    switch (this.investmentName) {
      case 'Tesouro Direto Selic':
        return new TesouroDiretoCalculator(this.amount, this.days, annualRateToDaily(selic()))
      case 'LCI':
        return new LCIACalculator(this.amount, this.days, annualRateToDaily(cdi() * this.profitibility))
      case 'LCA':
        return new LCIACalculator(this.amount, this.days, annualRateToDaily(cdi() * this.profitibility))
      case 'NuConta':
        return new NuCDBCalculator(this.amount, this.days, annualRateToDaily(cdi()))
      case 'CDB':
        return new NuCDBCalculator(this.amount, this.days, annualRateToDaily(cdi() * this.profitibility))
      case 'Poupança':
        return new PoupancaCalculator(this.amount, this.days, poupancaDailyRate())
    }
  }
}

export default Investment
