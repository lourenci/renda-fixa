import React from 'react'

class InvestmentInput extends React.PureComponent {
  render () {
    return (
      <div>
        <div className='input-group input-group-sm mt-4'>
          <input type='number' name='value' className='form-control' placeholder='Valor investido' min='0' step='0.01'
            required />
        </div>
        <div className='input-group input-group-sm mt-2'>
          <input type='number' name='days' className='form-control' placeholder='Prazo' min='0' required />
          <div className='input-group-append'>
            <span className='input-group-text'>dias</span>
          </div>
        </div>
      </div>
    )
  }
}

export default InvestmentInput
