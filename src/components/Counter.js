// This class shows how we could change state using setState
// also, how we could change based on previous state

import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
    }

    addNum() {
        // this.setState({
        //     number: this.state.number + 1
        // })
        this.setState((prev) => ({
            number: prev.number + 1
        }))
    }

    addFive() {
        this.addNum()
        this.addNum()
        this.addNum()
        this.addNum()
        this.addNum()
    }

    render() {
        return (
            <div>
                <div>Counter: {this.state.number}</div>
                <button onClick = {() => this.addFive()}>Add Five</button>
            </div>
        )
    }
}

export default Counter