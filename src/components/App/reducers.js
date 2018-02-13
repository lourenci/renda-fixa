import { combineReducers } from 'redux'
import investimentTypes from 'Services/investimentTypes/reducer'
import investments from './components/InvestmentList/reducer'

const fixedIncomeApp = combineReducers({
  investimentTypes,
  investments
})

export default fixedIncomeApp
