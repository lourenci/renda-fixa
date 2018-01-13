import React from 'react'

class FixedIncomeFormCard extends React.Component {
  render () {
    return (
      <div className='card'>
        <div className='card-body'>
          <div className='form-group'>
            <select className='form-control'>
              <option value='tesouro-selic'>Tesouro Direto Selic</option>
              <option value='nubank'>Nubank</option>
              <option value='lci'>LCI</option>
              <option value='lca'>LCA</option>
              <option value='cdb'>CDB</option>
            </select>
          </div>
          <div className='input-group'>
            <input type='number' className='form-control' placeholder='Rentabilidade' min='0' />
            <div className='input-group-append'>
              <span className='input-group-text'>% do CDI</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FixedIncomeFormCard
