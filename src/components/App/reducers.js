import { combineReducers } from 'redux'
import investimentTypes from '../../services/investimentTypes/reducer'

const fixedIncomeApp = combineReducers({ investimentTypes })

export default fixedIncomeApp
