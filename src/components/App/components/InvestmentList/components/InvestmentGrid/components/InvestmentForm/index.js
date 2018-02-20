import { connect } from 'react-redux'
import InvestmentFormCard from './components/InvestmentFormCard'
import { calculateInvestment, removeInvestment } from '../../../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    investmentTypes: state.investmentTypes,
    investment: ownProps.investment
  }
}

const mapDispatchToProps = dispatch => ({
  onCalculate: investment => {
    dispatch(calculateInvestment(investment))
  },
  onClose: investment => {
    dispatch(removeInvestment(investment))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentFormCard)
