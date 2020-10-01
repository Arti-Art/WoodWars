import React from "react";
import TopBar from "./topbar";
import LoginModal from "./loginmodal";
import Button from "./button";
import "../styles/overlay.css";

class Overlay extends React.Component {
    constructor() {
        super();
        this.state = {
            showLoginModal: true,
            showSignup: false,
            email: "",
            password: "",
            color: "#FF0000",
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
    }
    toggleModal() {
        this.setState({showLoginModal: !this.state.showLoginModal});
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
            <div id="overlay">
                <TopBar />
                {!this.state.showLoginModal && (
                    <Button
                        value="Log In"
                        toggleModal={this.toggleModal}
                        className="button-login"
                    />
                )}
                {this.state.showLoginModal && (
                    <LoginModal
                        state={this.state}
                        toggleModal={this.toggleModal}
                        handleChange={this.handleChange}
                        toggleSignup={this.toggleSignup}
                        handleClick={this.handleClick}
                    />
                )}
            </div>
        );
    }
}

export default Overlay;
