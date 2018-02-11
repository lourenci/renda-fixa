import { ADD_INVESTMENT, CALCULATED_INVESTMENT } from './actions'

const investments = (state = [], action) => {
  switch (action.type) {
    case ADD_INVESTMENT:
      return [...state, {
        id: action.id,
        status: action.status
      }]
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
