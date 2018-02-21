import style from './index.scss'
import React from 'react'
import InvestmentTypeSelect, { propTypes as InvestmentTypesPropTypes } from './components/InvestmentTypeSelect'
import InvestmentInput from './components/InvestmentInput'
import CloseButton from '../../../../components/CloseButton'
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
        <CloseButton className={style.closeButton} onClick={this.onClose.bind(this)} />
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

InvestmentFormCard.propTypes = Object.assign({}, InvestmentTypesPropTypes, {
  investment: PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  onClose: PropTypes.func.isRequired
})

export default InvestmentFormCard
