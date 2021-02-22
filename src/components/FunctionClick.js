// this file shows how to create event handler as a functional component

import React from "react";

function FunctionClick() {
    function clickBtn() {
        console.log('Clicked!')
    }
    return (
        <div>
            <button onClick={clickBtn}>Click</button>
        </div>
    )
}

export default FunctionClick
