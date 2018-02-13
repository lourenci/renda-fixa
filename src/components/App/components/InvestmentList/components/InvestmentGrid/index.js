import style from './index.scss'
import React from 'react'
import InvestimentForm from './components/InvestimentForm/index'
import InvestmentResult from './components/InvestimentResult'

class InvestmentGrid extends React.Component {
  onNewInvestment () {
    this.props.onNewInvestment()
  }

  render () {
    const investmentForms = () => {
      return this.props.investments.map(investment => {
        return (
          <div className='m-3' key={investment.id}>
            {investment.status === 'in_simulation' ? <InvestimentForm investment={investment} />
              : <InvestmentResult investment={investment} />}
          </div>
        )
      })
    }

    const toOpenANewSimulation = () => (
      <div className={`${style.for_new} d-flex justify-content-center align-items-center m-3`}>
        <i className={`fa fa-plus-circle fa-4x ${style.plus_icon}`} onClick={this.onNewInvestment.bind(this)} />
      </div>
    )

    return (
      <div className='row justify-content-center align-items-center h-100'>
        {investmentForms()}
        {this.props.investments.length < 4 && toOpenANewSimulation()}
      </div>
    )
  }
}

// InvestmentGrid.propTypes = {
//   investiments: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       simulated: PropTypes.bool
//     })
//   )
// }

export default InvestmentGrid
