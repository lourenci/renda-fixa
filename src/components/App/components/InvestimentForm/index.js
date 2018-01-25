import { connect } from 'react-redux'
import InvestimentFormCard from './InvestimentFormCard'

const mapStateToProps = state => {
  return {
    investimentTypes: state.investimentTypes
  }
}
const mapDispatchToProps = _ => {
  return {
    onCalculate: investiment => {
      console.log(investiment)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestimentFormCard)
