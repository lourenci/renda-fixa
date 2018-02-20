import { ADD_INVESTMENT, CALCULATED_INVESTMENT, REMOVE_INVESTMENT } from './actions'

const investments = (state = [], action) => {
  switch (action.type) {
    case ADD_INVESTMENT:
      return [...state, {
        id: action.id,
        status: action.status
      }]
    case REMOVE_INVESTMENT:
      return state.filter(investment => investment.id !== action.id)
    case CALCULATED_INVESTMENT:
      return state.map(investment => {
        if (investment.id === action.id) {
          return action
        }
        return investment
      })
    default:
      return state
  }
}

export default investments
