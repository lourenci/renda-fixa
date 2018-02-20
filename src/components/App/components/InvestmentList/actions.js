import InvestmentCalculator from 'Services/calculators/InvestmentCalculator'
import TesouroDiretoCalculator from 'Services/calculators/TesouroDiretoCalculator'
import { INVESTMENT_TYPES } from 'Services/investmentTypes'

const investmentType = name => INVESTMENT_TYPES.filter(investment => investment.name === name)[0]
const investmentCalculator = calculator =>
  (value, days, rate, taxes) =>
    (calculator === 'TesouroDiretoCalculator' ? new TesouroDiretoCalculator(value, days, rate, taxes)
      : new InvestmentCalculator(value, days, rate, taxes))

export const ADD_INVESTMENT = 'ADD_INVESTMENT'
export const REMOVE_INVESTMENT = 'REMOVE_INVESTMENT'
export const CALCULATED_INVESTMENT = 'CALCULATED_INVESTMENT'

let nextInvestmentId = 0

export const addInvestment = () => {
  return {
    type: ADD_INVESTMENT,
    id: nextInvestmentId++,
    status: 'in_simulation'
  }
}

export const removeInvestment = investment => {
  return {
    type: REMOVE_INVESTMENT,
    id: investment.id
  }
}

export const calculateInvestment = investment => {
  const value = Number(investment.value)
  const days = Number(investment.days)
  const rate = Number((0.07 * (investment.profitability / 100 || 1)).toFixed(5))

  const calculator = investmentCalculator(investmentType(investment.type).calculator)(value, days,
    rate, investmentType(investment.type).taxes.map(tax => tax.name))

  return {
    type: CALCULATED_INVESTMENT,
    id: investment.id,
    status: 'calculated',
    name: investment.type,
    investedMoney: value,
    days: days,
    result: {
      grossAmount: calculator.grossAmount(),
      amountTaxes: calculator.amountTaxes(),
      netAmount: calculator.netAmount(),
      netPercentYear: calculator.netPercentYear()
    }
  }
}
