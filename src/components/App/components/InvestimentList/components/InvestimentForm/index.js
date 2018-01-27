import { connect } from 'react-redux'
import InvestimentFormCard from './components/InvestimentFormCard/index'

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
