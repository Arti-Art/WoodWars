import React from "react";

function LoginModal(props) {
    return (
        <div id="login-modal">
            <h2>{props.state.showSignup ? "Sign Up" : "Log In"}</h2>
            <input
                type="text"
                name="email"
                id="login-modal-id"
                placeholder="e-mail"
                value={props.state.email}
                onChange={props.handleChange}
                required
            />
            <input
                type="password"
                name="password"
                id="login-modal-email"
                placeholder="password"
                value={props.state.password}
                onChange={props.handleChange}
                minLength="4"
                required
            />
            {props.state.showSignup && (
                <div id="color-selector">
                    <p>pick a color :&nbsp;</p>
                    <input
                        type="color"
                        id="color-input"
                        name="color"
                        value={props.state.color}
                        onChange={props.handleChange}
                    />
                </div>
            )}
            <div id="loginmodal-buttons">
                <input
                    type="button"
                    value={props.state.showSignup ? "Sign Up" : "Log In"}
                    onClick={props.handleClick}
                    className="button"
                />
                <input
                    type="button"
                    value="close"
                    onClick={props.toggleModal}
                    className="button"
                />
            </div>
            <div id="toggle-signup-group">
                <p>
                    {props.state.showSignup
                        ? "Already have an account?"
                        : "No account yet?"}
                </p>
                <input
                    id="toggle-signup"
                    type="button"
                    value={props.state.showSignup ? "Log In" : "Sign Up"}
                    onClick={props.toggleSignup}
                />
            </div>
        </div>
    );
}

export default LoginModal;
