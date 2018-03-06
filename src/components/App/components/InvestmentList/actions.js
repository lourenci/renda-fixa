import { INVESTMENT_TYPES } from 'Services/investmentTypes'
import { investments } from 'Services/Investment'

export const ADD_INVESTMENT = 'ADD_INVESTMENT'
export const REMOVE_INVESTMENT = 'REMOVE_INVESTMENT'
export const CALCULATED_INVESTMENT = 'CALCULATED_INVESTMENT'

const investmentType = name => INVESTMENT_TYPES.find(investment => investment.name === name)
const investmentCalculator = investment => (value, days, rate) => {
  return new investments[investment](value, days, rate).calculator()
}

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
  const amount = Number(investment.value)
  const days = Number(investment.days)
  const profitabilityOfCDI = investment.profitability / 100

  const calculator = investmentCalculator(investmentType(investment.name).investment)(amount, days, profitabilityOfCDI)

  return {
    type: CALCULATED_INVESTMENT,
    id: investment.id,
    status: 'calculated',
    name: investment.name,
    investedMoney: amount,
    days: days,
    result: {
      grossAmount: calculator.grossAmount(),
      amountTaxes: calculator.amountTaxes(),
      netAmount: calculator.netAmount(),
      netPercentYear: calculator.netPercentYear()
    }
  }
}
