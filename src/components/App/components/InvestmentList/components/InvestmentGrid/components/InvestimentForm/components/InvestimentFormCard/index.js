import style from './index.scss'
import React from 'react'
import InvestimentTypeSelect from './components/InvestimentTypeSelect/index'
import InvestimentInput from './components/InvestimentInput/index'
import FormDataParse from 'Services/FormDataParse'

class FixedIncomeFormCard extends React.Component {
  handleSubmit (event) {
    event.preventDefault()

    const investiment = Object.assign({},
      { id: this.props.investment.id },
      FormDataParse(new FormData(event.target)).toJSON()
    )

    this.props.onCalculate(investiment)
  }

  render () {
    return (
      <div className={`card rounded ${style.card_property}`}>
        <div className='card-body h-100'>
          <form className='h-100' onSubmit={this.handleSubmit.bind(this)}>
            <div className='d-flex flex-column justify-content-between h-100'>
              <div>
                <InvestimentTypeSelect investimentTypes={this.props.investimentTypes} />
              </div>
              <div>
                <InvestimentInput />
                <button type='submit' className='btn btn-primary btn-block mt-4'>Calcular</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FixedIncomeFormCard
