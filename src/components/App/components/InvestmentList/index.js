import { connect } from 'react-redux'
import InvestmentGrid from './components/InvestmentGrid/index'
import { addInvestment } from './actions'

const mapStateToProps = state => {
  return { investments: state.investments }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewInvestment: () => {
      dispatch(addInvestment())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentGrid)
