import React, { Component } from 'react'

class Layout extends Component {
  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <div>
            {this.props.children}            
          </div>
          <script src="/javascripts/bundle.js" />
        </body>
      </html>
    )
  }
}

export default Layout
