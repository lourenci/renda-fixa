import './index.scss'
import React from 'react'

class FixedIncomeFormCard extends React.Component {
  render () {
    return (
      <div className='card rounded'>
        <div className='card-body p-3'>
          <select className='custom-select custom-select-sm'>
            <option value='tesouro-selic' selected>Tesouro Direto Selic</option>
            <option value='nubank'>Nubank</option>
            <option value='lci'>LCI</option>
            <option value='lca'>LCA</option>
            <option value='cdb'>CDB</option>
          </select>
          <div className='input-group input-group-sm mt-2'>
            <input type='number' className='form-control' placeholder='Rentabilidade' min='0' />
            <div className='input-group-append'>
              <span className='input-group-text'>% do CDI</span>
            </div>
          </div>
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
