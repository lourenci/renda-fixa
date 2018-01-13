import './index.scss'
import React from 'react'
import FixedIncomeFormCard from './components/FixedIncomeFormCard'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <FixedIncomeFormCard />
          </div>
        </div>
      </div>
    )
  }
}

export default App
