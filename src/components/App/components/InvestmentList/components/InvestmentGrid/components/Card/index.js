import React from 'react'
import PropTypes from 'prop-types'
import style from './index.scss'
import CloseButton from './components/CloseButton'

class Card extends React.Component {
  render () {
    return (
      <div className={`card rounded ${style.card_property}`}>
        <CloseButton className={style.closeButton} onClick={this.props.onCloseCard} />
        {this.props.children}
      </div>
    )
  }
}

Card.propTypes = {
  onCloseCard: PropTypes.func.isRequired
}

export default Card
