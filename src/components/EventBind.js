import React, { Component } from "react";

class EventBind extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Hello'
        }
    }
    clickHandler() {
        this.setState({
            message: 'GoodBye'
        })
        console.log(this)
    }
    
    // in this case, the this object inside clickHandler is undefined, so error occurs and we cannot call this.setState
    /*
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>CLICK</button>
            </div>
        )
    }
    */

    // There're 3 approaches
    // 1. Directly bind this in the event
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler.bind(this)}>CLICK</button>
            </div>
        )
    }

    // 2. Using arrow function
    /* render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler.bind(this)}>CLICK</button>
            </div>
        )
    } */
    
}

export default EventBind