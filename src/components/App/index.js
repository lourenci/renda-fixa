import './index.scss'
import React from 'react'
import InvestimentTypesForm from '../../containers/investimentTypesForm'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <InvestimentTypesForm />
          </div>
        </div>
      </div>
    )
  }
}

export default App
