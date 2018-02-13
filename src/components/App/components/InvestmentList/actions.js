import InvestmentCalculator from 'Services/InvestmentCalculator'
import { INVESTMENT_TYPES } from 'Services/investimentTypes'

const investmentType = name => INVESTMENT_TYPES.filter(investment => investment.name === name)[0]

export const ADD_INVESTMENT = 'ADD_INVESTMENT'
export const CALCULATED_INVESTMENT = 'CALCULATED_INVESTMENT'

let nextInvestmentId = 0

export const addInvestment = () => {
  return {
    type: ADD_INVESTMENT,
    id: nextInvestmentId++,
    status: 'in_simulation'
  }
}

export const calculateInvestment = investment => {
  const investmentCalculator = new InvestmentCalculator(investment.value, investment.days,
    0.07, investmentType(investment.type).taxes.map(tax => tax.name))

  return {
    type: CALCULATED_INVESTMENT,
    id: investment.id,
    status: 'calculated',
    name: investment.type,
    investedMoney: investment.value,
    days: investment.days,
    grossAmount: investmentCalculator.grossAmount(),
    amountTaxes: investmentCalculator.amountTaxes(),
    netAmount: investmentCalculator.netAmount(),
    netPercentYear: investmentCalculator.netPercentYear()
  }
}
