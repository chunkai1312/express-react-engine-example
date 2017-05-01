import React, { Component } from 'react'

class IndexPage extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
      </div>
    )
  }
}

export default IndexPage