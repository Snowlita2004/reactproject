import React, { Component } from 'react'
import HOC from './HOC'

class HoverCouunter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.inc}>Click Me {this.props.count}</button>
      </div>
    )
  }
}

export default HOC(HoverCouunter)