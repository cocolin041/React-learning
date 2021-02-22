/**
 * This component shows when is the timning of unmount in the lifecycle
 * When the Header component is removed from this Index component, it will call the method componentWillUnmount in Header component
 * When the Header component is again added, it will go through construct -> componentWillMount -> render -> componentDidMount again
 */

import React, { Component } from 'react'
import Clock from './Clock'

class Index extends Component {
  constructor () {
    super()
    this.state = {
      showClock: true
    }
  }

  controlClock() {
    this.setState({showClock: !this.state.showClock})
  }

  render () {
    return (
      <div>
        {this.state.showClock ? <Clock/> : null}
        <button onClick={this.controlClock.bind(this)}>{this.state.showClock ? "Hide Clock" : "Show Clock"}</button>
      </div>
    )
  }
}

export default Index
