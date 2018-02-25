import style from './index.scss'
import React from 'react'
import PropTypes from 'prop-types'

class InformationTable extends React.PureComponent {
  render () {
    const lines = () => (
      this.props.lines.map((line, index) => (
        <tr key={index}>
          <td>{line.title}</td>
          <td className='text-right'>{line.value}</td>
        </tr>
      ))
    )

    return (
      <table className={`${style.table} w-100`}>
        <tbody>
          {lines()}
        </tbody>
      </table>
    )
  }
}

InformationTable.propTypes = {
  lines: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default InformationTable
