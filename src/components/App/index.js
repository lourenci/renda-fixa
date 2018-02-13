import './index.scss'
import React from 'react'
import InvestimentList from './components/InvestmentList/index'

class App extends React.Component {
  render () {
    return (
      <div className='container h-100'>
        <InvestimentList />
      </div>
    )
  }
}

export default App
