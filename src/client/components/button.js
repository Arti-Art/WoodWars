import React from "react";

function Button(props) {
    return (
        <div className={props.className}>
            <button type="button" onClick={props.handleClick}>
                {props.value}
            </button>
        </div>
    );
}

export default Button;
