import LCIACalculator from './LCIACalculator'
import TesouroDiretoCalculator from './TesouroDiretoCalculator'
import NuCDBCalculator from 'Services/calculators/NuCDBCalculator'
import PoupancaCalculator from 'Services/calculators/PoupancaCalculator'
import { annualRateToDaily } from 'Services/financialMath'
import { cdi, selic } from 'Services/indexes'

const poupancaDailyRate = () => {
  const selicIndex = selic()
  return (selicIndex > 0.085 ? 0.000166 : annualRateToDaily(selicIndex * 0.7))
}

class InvestmentCalculator {
  constructor (investmentName, amount, days, profitibility = null) {
    this.investmentName = investmentName
    this.amount = amount
    this.days = days
    this.profitibility = profitibility
  }

  calculator () {
    if (this.investmentName === 'Tesouro Direto Selic') {
      return new TesouroDiretoCalculator(this.amount, this.days, annualRateToDaily(selic()))
    }
    if (this.investmentName === 'LCI') {
      return new LCIACalculator(this.amount, this.days, annualRateToDaily(cdi() * this.profitibility))
    }
    if (this.investmentName === 'LCA') {
      return new LCIACalculator(this.amount, this.days, annualRateToDaily(cdi() * this.profitibility))
    }
    if (this.investmentName === 'NuConta') {
      return new NuCDBCalculator(this.amount, this.days, annualRateToDaily(cdi()))
    }
    if (this.investmentName === 'CDB') {
      return new NuCDBCalculator(this.amount, this.days, annualRateToDaily(cdi() * this.profitibility))
    }
    if (this.investmentName === 'Poupança') {
      return new PoupancaCalculator(this.amount, this.days, poupancaDailyRate())
    }
  }
}

export default InvestmentCalculator
