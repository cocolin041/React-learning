import React from "react";

function functionClick() {
    function clickBtn() {
        console.log('clicked!')
    }

    return(
        <button onClick={clickBtn}>Click</button>
    )

}

export default className