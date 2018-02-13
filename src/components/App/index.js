import './index.scss'
import React from 'react'
import InvestmentList from './components/InvestmentList/index'

class App extends React.Component {
  render () {
    return (
      <div className='container h-100'>
        <InvestmentList />
      </div>
    )
  }
}

export default App
