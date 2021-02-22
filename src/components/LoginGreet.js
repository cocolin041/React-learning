/* Three methods to do conditional rendering
1. if else
2. variable element
3. ternary conditional operator
*/

import React, { Component } from 'react'

class LoginGreet extends Component {
  constructor () {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  // 1.
  // render () {
  //   if (this.state.isLoggedIn) {
  //     return <div>Welcome Coco</div>
  //   } else {
  //     return <div>Welcome Guest</div>
  //   }
  // }

  // 2.
  // render () {
  //   let message
  //   if (this.state.isLoggedIn) {
  //     message = <div>Welcome Coco</div>
  //   } else {
  //     message = <div>Welcome Guest</div>
  //   }
  //   return (
  //     <div>{message}</div>
  //   )
  // }

  // 3.
  render () {
    return this.state.isLoggedIn ? (
      <div>Welcome Coco</div>
    ) : (
      <div>Welcome Guest</div>
    )
  }
}

export default LoginGreet
