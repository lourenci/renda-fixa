import { connect } from 'react-redux'
import InvestmentFormCard from './components/InvestmentFormCard/index'
import { calculateInvestment } from '../../../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    investmentTypes: state.investmentTypes,
    investment: ownProps.investment
  }
}

const mapDispatchToProps = dispatch => ({
  onCalculate: investment => {
    dispatch(calculateInvestment(investment))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentFormCard)
