import React from "react";

function LoginModal(props) {
    return (
        <div id="login-modal">
            <input type="text" placeholder="e-mail" />
            <input type="text" placeholder="password" />
            <br />
            <input type="button" value="LOG IN" />
            <input type="button" value="close" onClick={props.onClick} />
        </div>
    );
}

export default LoginModal;
