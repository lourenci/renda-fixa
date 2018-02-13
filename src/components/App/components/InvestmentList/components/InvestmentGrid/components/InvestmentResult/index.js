import style from './index.scss'
import InformationTable from './components/InformationTable/index'
import React from 'react'
import PropTypes from 'prop-types'

const brazilianMoney = number => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

class InvestmentResult extends React.Component {
  render () {
    return (
      <div className={`card rounded ${style.card_property}`}>
        <div className='card-header font-weight-bold p-2'>{this.props.name}</div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item p-2'>
            <InformationTable lines={[
              { title: 'Investimento', value: brazilianMoney(this.props.investedMoney) },
              { title: 'Dias', value: `${this.props.days}` }
            ]} />
          </li>
          <li className='list-group-item p-2'>
            <InformationTable lines={[
              { title: 'Total bruto', value: brazilianMoney(this.props.result.grossAmount) },
              { title: 'Impostos', value: `- ${brazilianMoney(this.props.result.amountTaxes)}` }
            ]} />
          </li>
          <li className='list-group-item p-2'>
            <InformationTable lines={[
              { title: 'Total líquido', value: brazilianMoney(this.props.result.netAmount) },
              { title: '% líquida ao ano', value: `${(this.props.result.netPercentYear * 100).toFixed(2)}%` }
            ]} />
          </li>
        </ul>
      </div>
    )
  }
}

InvestmentResult.propTypes = {
  name: PropTypes.string.isRequired,
  investedMoney: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
  result: PropTypes.shape({
    grossAmount: PropTypes.number.isRequired,
    amountTaxes: PropTypes.number.isRequired,
    netAmount: PropTypes.number.isRequired,
    netPercentYear: PropTypes.number.isRequired
  }).isRequired
}

export default InvestmentResult
