import './index.scss'
import React from 'react'
import InvestimentTypeSelect from './InvestimentTypeSelect'
import InvestimentInput from './InvestimentInput'
import FormDataParse from '../../../../../services/FormDataParse'

class FixedIncomeFormCard extends React.Component {
  handleSubmit (event) {
    event.preventDefault()

    const investiment = FormDataParse(new FormData(event.target)).toJSON()
    this.props.onCalculate(investiment)
  }

  render () {
    return (
      <div className='card rounded'>
        <div className='card-body p-3'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <InvestimentTypeSelect investimentTypes={this.props.investimentTypes} />
            <InvestimentInput />
            <button type='submit' className='btn btn-primary btn-block mt-4'>Calcular</button>
          </form>
        </div>
      </div>
    )
  }
}

export default FixedIncomeFormCard
