import React from 'react'
import PropTypes from 'prop-types'

class InvestmentTypeSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = { selectedInvestment: this.props.investmentTypes[0] }
  }

  handleOnChange (e) {
    const selectedInvestment = this.props.investmentTypes.filter(type => type.name === e.target.value)[0]
    this.setState({ selectedInvestment: selectedInvestment })
  }

  render () {
    const inputForIndex = () => {
      if (this.state.selectedInvestment.index) {
        return (
          <div className='input-group input-group-sm mt-2'>
            <input type='number' name='profitability' className='form-control' placeholder='Rentabilidade' min='0'
              required />
            <div className='input-group-append'>
              <span className='input-group-text'>% da {this.state.selectedInvestment.index}</span>
            </div>
          </div>
        )
      }
    }

    return (
      <div>
        <select name='name' className='form-control' value={this.state.selectedInvestment.name}
          onChange={this.handleOnChange.bind(this)}>
          {this.props.investmentTypes.map((type, index) => (
            <option key={index} value={type.name}>{type.name}</option>))}
        </select> {inputForIndex()}
      </div>
    )
  }
}

export const propTypes = {
  investmentTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      index: PropTypes.string
    })
  ).isRequired
}
InvestmentTypeSelect.propTypes = propTypes

export default InvestmentTypeSelect
