import React from 'react'
import PropTypes from 'prop-types'

class CloseButton extends React.PureComponent {
  render () {
    return (
      <button className={`close ${this.props.className}`} aria-label='Fechar'
        onClick={this.props.onClick}>
        <i className='fa fa-close' />
      </button>
    )
  }
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CloseButton
