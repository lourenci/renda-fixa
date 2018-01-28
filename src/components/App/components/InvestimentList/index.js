import style from './index.scss'
import React from 'react'
import InvestimentForm from './components/InvestimentForm/index'

class InvestimentList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { pendingInvestiments: 0 }
  }

  openANewInvestiment () {
    this.setState(prevState => ({
      pendingInvestiments: prevState.pendingInvestiments + 1
    }))
  }

  render () {
    const pendingInvestiments = () => (
      Array.from({ length: this.state.pendingInvestiments }, (_, j) => (
        <div className='m-3' key={j}>
          <InvestimentForm />
        </div>
      ))
    )

    const toOpenANewInvestiment = () => (
      <div className={`${style.for_new} d-flex justify-content-center align-items-center m-3`}>
        <i className={`fa fa-plus-circle fa-4x ${style.plus_icon}`} onClick={this.openANewInvestiment.bind(this)} />
      </div>
    )

    return (
      <div className='row justify-content-center align-items-center h-100'>
        {pendingInvestiments()}
        {this.state.pendingInvestiments < 4 && toOpenANewInvestiment()}
      </div>
    )
  }
}

// InvestimentList.propTypes = {
//   investiments: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       simulated: PropTypes.bool
//     })
//   )
// }

export default InvestimentList
