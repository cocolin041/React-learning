/**
 * In this file, we learn the order of lifecycle in React
 * including: construct, componentWillMount, componentDidMount, render
 * This order is: construct -> componentWillMount -> render -> componentDidMount -> render x (multiple times) when data update
 * 
 * ref: to get the information, or use DOM API of a DOM object, we can use the 'ref' attribute => but not recommended, use the least of it
 */
import React, { Component } from 'react'

class Clock extends Component {
	constructor () {
		// put anything that should be initialize with the component here
		super()
		this.state = {
			time: new Date()
		}
		console.log('construct')
	}

	// Since this function will be called before component rendered, those manipulations that don't rely on DOM should be put here
	componentWillMount () {
		// start data change here ex. ajax fetch, start time
		console.log('component will mount')
		this.timer = setInterval(() => {
			this.setState({time: new Date()})
		}, 1000)
	}

	// Since this function will be called after component rendered, those manipulations that rely on DOM should be put here
	componentDidMount () {
		console.log('component did mount')

		// we can do sth here after page rendered
		console.log('The title is at height: ' + this.title.offsetHeight)

		// the page will auto focus on the input after loaded
		this.input.focus()
	}

	componentWillUnmount() {
		// clear clock, clean data
		console.log('component will unmount')
		clearInterval(this.timer)
	}

	render () {
		console.log('render')
		return (
			<div>
				<h1 ref={(title) => this.title = title}>Current Time Is:</h1>
				<div>{this.state.time.toLocaleTimeString()}</div>
				<input ref={(input) => this.input = input} />
			</div>

		)
	}
}

export default Clock