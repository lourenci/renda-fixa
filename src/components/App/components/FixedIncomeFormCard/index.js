import './index.scss'
import React from 'react'
import InvestimentTypeSelect from './InvestimentTypeSelect'

class FixedIncomeFormCard extends React.Component {
  render () {
    return (
      <div className='card rounded'>
        <div className='card-body p-3'>
          <InvestimentTypeSelect investimentTypes={this.props.investimentTypes} />
          <div className='input-group input-group-sm mt-4'>
            <input type='number' className='form-control' placeholder='Valor investido' min='0' />
          </div>
          <div className='input-group input-group-sm mt-2'>
            <input type='number' className='form-control' placeholder='Prazo' min='0' />
            <div className='input-group-append'>
              <span className='input-group-text'>dias</span>
            </div>
          </div>
          <button type='button' className='btn btn-primary btn-block mt-4'>Calcular</button>
        </div>
      </div>
    )
  }
}

export default FixedIncomeFormCard
