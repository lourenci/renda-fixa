import calculators from 'Services/calculators'
import { INVESTMENT_TYPES } from 'Services/investmentTypes'
import indexes from 'Services/indexes'

const investmentType = name => INVESTMENT_TYPES.filter(investment => investment.name === name)[0]
const investmentCalculator = calculator => (value, days, rate) => new calculators[calculator](value, days, rate)
const index = index => index ? indexes.cdi : indexes.selic

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
  const indexValue = index(investmentType(investment.name).index)
  const rate = Number((indexValue * (investment.profitability / 100 || 1)).toFixed(5))

  const calculator = investmentCalculator(investmentType(investment.name).calculator)(value, days, rate)

  return {
    type: CALCULATED_INVESTMENT,
    id: investment.id,
    status: 'calculated',
    name: investment.name,
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
