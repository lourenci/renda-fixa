import React from 'react'
import PropTypes from 'prop-types'

class InvestimentTypeSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {selectedInvestiment: this.props.investimentTypes[0]}
  }

  handleOnChange (e) {
    const selectedInvestiment = this.props.investimentTypes.filter(type => type.name === e.target.value)[0]
    this.setState({selectedInvestiment: selectedInvestiment})
  }

  render () {
    const inputForIndex = () => {
      if (this.state.selectedInvestiment.index) {
        return (
          <div className='input-group input-group-sm mt-2'>
            <input type='number' className='form-control' placeholder='Rentabilidade' min='0' />
            <div className='input-group-append'>
              <span className='input-group-text'>% da {this.state.selectedInvestiment.index}</span>
            </div>
          </div>
        )
      }
    }

    return (
      <div>
        <select className='form-control' value={this.state.selectedInvestiment.name}
          onChange={this.handleOnChange.bind(this)}>
          {this.props.investimentTypes.map((type, index) => (<option key={index} value={type.name}>{type.name}</option>))}
        </select>
        {inputForIndex()}
      </div>
    )
  }
}

InvestimentTypeSelect.propTypes = {
  investimentTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      index: PropTypes.string
    })
  ).isRequired
}

export default InvestimentTypeSelect
