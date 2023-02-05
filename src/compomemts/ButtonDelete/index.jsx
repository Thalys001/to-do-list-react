import React from "react";

function ButtonDelete(props) {
    return (
        <button type={props.type} onClick={props.onCLick}>x</button>
    )
}

export default ButtonDelete
