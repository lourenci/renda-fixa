import './index.scss'
import React from 'react'
import InvestmentList from './components/InvestmentList'

class App extends React.PureComponent {
  render () {
    return (
      <div className='container h-100'>
        <InvestmentList />
      </div>
    )
  }
}

export default App
