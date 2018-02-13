import style from './index.scss'
import React from 'react'
import InvestmentTypeSelect from './components/InvestmentTypeSelect/index'
import InvestmentInput from './components/InvestmentInput/index'
import FormDataParse from 'Services/FormDataParse'

class InvestmentFormCard extends React.Component {
  handleSubmit (event) {
    event.preventDefault()

    const investment = Object.assign({},
      { id: this.props.investment.id },
      FormDataParse(new FormData(event.target)).toJSON()
    )

    this.props.onCalculate(investment)
  }

  render () {
    return (
      <div className={`card rounded ${style.card_property}`}>
        <div className='card-body h-100'>
          <form className='h-100' onSubmit={this.handleSubmit.bind(this)}>
            <div className='d-flex flex-column justify-content-between h-100'>
              <div>
                <InvestmentTypeSelect investmentTypes={this.props.investmentTypes} />
              </div>
              <div>
                <InvestmentInput />
                <button type='submit' className='btn btn-primary btn-block mt-4'>Calcular</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default InvestmentFormCard
