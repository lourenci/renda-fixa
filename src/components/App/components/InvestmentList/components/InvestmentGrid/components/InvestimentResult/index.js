import style from './index.scss'
import React from 'react'

const brazilianMoney = number => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

class InvestmentResult extends React.Component {
  render () {
    console.log(this.props.investment)
    return (
      <div className={`card rounded ${style.card_property}`}>
        <div className='card-header font-weight-bold'>{this.props.investment.name}</div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <table className={`${style.table} w-100`}>
              <tbody>
                <tr>
                  <td>Investimento</td>
                  <td className='text-right'>{brazilianMoney(this.props.investment.investedMoney)}</td>
                </tr>
                <tr>
                  <td>Dias</td>
                  <td className='text-right'>{this.props.investment.days}</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className='list-group-item'>
            <table className={`${style.table} w-100`}>
              <tbody>
                <tr>
                  <td>Total bruto</td>
                  <td className='text-right'>{brazilianMoney(this.props.investment.grossAmount)}</td>
                </tr>
                <tr>
                  <td>Impostos</td>
                  <td className='text-right'>{`- ${brazilianMoney(this.props.investment.amountTaxes)}`}</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className='list-group-item'>
            <table className={`${style.table} w-100`}>
              <tbody>
                <tr>
                  <td>Total líquido</td>
                  <td className='text-right'>{brazilianMoney(this.props.investment.netAmount)}</td>
                </tr>
                <tr>
                  <td>% líquida ao ano</td>
                  <td className='text-right'>{this.props.investment.netPercentYear * 100}%</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    )
  }
}

export default InvestmentResult
