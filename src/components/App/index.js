import './index.scss'
import React from 'react'
import InvestimentGrid from './components/InvestimentList'

class App extends React.Component {
  render () {
    return (
      <div className='container h-100'>
        <InvestimentGrid />
      </div>
    )
  }
}

export default App
