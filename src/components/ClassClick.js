// this file shows how to create event handler as a class component
// the difference between class component and functional component is the 'this' keyword

import React, { Component } from "react";

class ClassClick extends Component {
    clickBtn() {
        console.log('Clicked!')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickBtn}>Click me</button>
            </div>
        )
    }
}

export default ClassClick