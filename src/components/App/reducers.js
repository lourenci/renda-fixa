import { combineReducers } from 'redux'
import investmentTypes from 'Services/investmentTypes/reducer'
import investments from './components/InvestmentList/reducer'

const fixedIncomeApp = combineReducers({
  investmentTypes: investmentTypes,
  investments
})

export default fixedIncomeApp
