import { connect } from 'react-redux'
import InvestmentFormCard from './components/InvestmentFormCard'
import { calculateInvestment } from '../../../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    investmentTypes: state.investmentTypes,
    investment: ownProps.investment
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCalculate: investment => {
    dispatch(calculateInvestment(investment))
  },
  onClose: ownProps.onClose
})

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentFormCard)
