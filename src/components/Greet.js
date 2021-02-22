// This tutorial will show how to destructure props and state
// This is a simple function component

import React, { Component } from 'react'

// method without destruction
// const Greet = props => {
//     return(
//         <h1>Hello, {props.name}</h1>
//     )
// }

// method 1. with destruction
// const Greet = ({name, heroName}) => {
//     return(
//         <h1>Hello, {name} a.k.a {heroName}</h1>
//     )
// }

// method 2. with destruction
const Greet = props => {
    // extract parameters from prpos
    const {name, heroName} = props
    return(
        <h1>Hello, {name} a.k.a {heroName}</h1>
    )
}

export default Greet