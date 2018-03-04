import InvestmentCalculator from 'Services/calculators/InvestmentCalculator'

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
  const amount = Number(investment.value)
  const days = Number(investment.days)

  const calculator = new InvestmentCalculator(investment.name, amount, days, investment.profitibility).calculator()

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
