import React from "react";

class LoginModal extends React.Component {
    constructor() {
        super();
        this.state = {
            showSignup: false,
            email: "",
            password: "",
            color: "#FF0000",
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
    }
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        });
    }
    toggleSignup() {
        this.setState({
            showSignup: !this.state.showSignup,
        });
    }
    handleClick() {
        console.log("the Class based component method handleClick works");
    }
    render() {
        return (
            <div id="login-modal">
                <h2>{this.state.showSignup ? "Sign Up" : "Log In"}</h2>
                <input
                    type="text"
                    name="email"
                    id="login-modal-id"
                    placeholder="e-mail"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    id="login-modal-email"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    minLength="4"
                    required
                />
                {this.state.showSignup && (
                    <div id="color-selector">
                        <p>pick a color :&nbsp;</p>
                        <input
                            type="color"
                            id="color-input"
                            name="color"
                            value={this.state.color}
                            onChange={this.handleChange}
                        />
                    </div>
                )}
                <div id="loginmodal-buttons">
                    <input
                        type="button"
                        value="LOG IN"
                        onClick={this.handleClick}
                        className="button"
                    />
                    <input
                        type="button"
                        value="close"
                        onClick={this.props.toggleModal}
                        className="button"
                    />
                </div>
                {this.state.showSignup ? (
                    <div>
                        <p>Already have an account?</p>
                        <input
                            type="button"
                            value="Log In"
                            onClick={this.toggleSignup}
                            className="button"
                        />
                    </div>
                ) : (
                    <div>
                        <p>No account yet?</p>
                        <input
                            type="button"
                            value="Sign Up"
                            onClick={this.toggleSignup}
                            className="button"
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default LoginModal;
