// This class shows how to change paramter and automatically render it in the browser

import React, { Component } from 'react'

class Welcome extends Component {
    constructor(props) {
        //we need super because this class is an extension from another class
        super()

        this.state = {
            message: 'Welcome '
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for Subscribing '
        })
    }

    render() {
        const {name} = this.props
        return (
            <div>
                <h1>{this.state.message} {name}</h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Welcome