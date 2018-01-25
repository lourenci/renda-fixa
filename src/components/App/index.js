import './index.scss'
import React from 'react'
import InvestimentForm from './components/InvestimentForm'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <InvestimentForm />
          </div>
        </div>
      </div>
    )
  }
}

export default App
