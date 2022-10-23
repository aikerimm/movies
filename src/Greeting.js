import React from 'react'
import PropTypes from 'prop-types'

export default class Greeting extends React.PureComponent {
  render () {
    return (
            <h2>Hello {this.props.username}!</h2>
    )
  }
}

Greeting.propTypes = {
  username: PropTypes.string
}
