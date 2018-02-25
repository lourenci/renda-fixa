import style from './index.scss'
import React from 'react'
import InvestmentForm from './components/InvestmentForm'
import InvestmentResult from './components/InvestmentResult'
import PropTypes from 'prop-types'

class InvestmentGrid extends React.PureComponent {
  onNewInvestment () {
    this.props.onNewInvestment()
  }

  render () {
    const investmentForms = () => {
      return this.props.investments.map(investment => {
        return (
          <div className='m-3' key={investment.id}>
            {investment.status === 'in_simulation'
              ? <InvestmentForm investment={investment} onClose={this.props.onClose} />
              : <InvestmentResult {...investment} onClose={this.props.onClose} />}
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

InvestmentGrid.propTypes = {
  investments: PropTypes.array.isRequired,
  onNewInvestment: PropTypes.func.isRequired
}

export default InvestmentGrid
