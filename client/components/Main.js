import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Main extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h1><Link to='/'> InstaReduxGram </Link></h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
