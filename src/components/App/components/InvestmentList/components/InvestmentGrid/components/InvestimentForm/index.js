import { connect } from 'react-redux'
import InvestimentFormCard from './components/InvestimentFormCard/index'
import { calculateInvestment } from '../../../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    investimentTypes: state.investimentTypes,
    investment: ownProps.investment
  }
}

const mapDispatchToProps = dispatch => ({
  onCalculate: investment => {
    dispatch(calculateInvestment(investment))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(InvestimentFormCard)
