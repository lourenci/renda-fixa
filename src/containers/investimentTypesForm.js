import { connect } from 'react-redux'
import FixedIncomeFormCard from '../components/App/components/FixedIncomeFormCard'

const mapStateToProps = state => {
  return {
    investimentTypes: state.investimentTypes
  }
}

export default connect(mapStateToProps)(FixedIncomeFormCard)
