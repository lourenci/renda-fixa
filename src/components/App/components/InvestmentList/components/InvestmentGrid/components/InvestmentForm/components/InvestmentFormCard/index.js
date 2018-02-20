import style from './index.scss'
import React from 'react'
import InvestmentTypeSelect from './components/InvestmentTypeSelect'
import InvestmentInput from './components/InvestmentInput'
import FormDataParse from 'Services/FormDataParse'
import PropTypes from 'prop-types'

class InvestmentFormCard extends React.Component {
  handleSubmit (event) {
    event.preventDefault()

    const investment = Object.assign({},
      { id: this.props.investment.id },
      FormDataParse(new FormData(event.target)).toJSON()
    )

    this.props.onCalculate(investment)
  }

  onClose () {
    this.props.onClose(this.props.investment)
  }

  render () {
    return (
      <div className={`card rounded ${style.card_property}`}>
        <button className={`close text-right ${style.closeButton}`} aria-label='Fechar'
          onClick={this.onClose.bind(this)}>
          <i className='fa fa-close' />
        </button>
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

InvestmentFormCard.propTypes = {
  investmentTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      index: PropTypes.string
    })
  ).isRequired,
  investment: PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  onClose: PropTypes.func.isRequired
}

export default InvestmentFormCard
