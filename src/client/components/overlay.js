import React from "react";
import TopBar from "./topbar";
import RightPane from "./rightpane"; // DELETE THIS JS IF NOT USED
import LoginModal from "./loginmodal";
import Button from "./button";
import "../styles/overlay.css";

class Overlay extends React.Component {
    constructor() {
        super();
        this.state = {showLoginModal: true};
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({showLoginModal: !this.state.showLoginModal});
    }
    // handleChange(event) {
    //     const {name, value} = event.target;
    //     this.setState({
    //         [name]: value,
    //     });
    // }
    render() {
        return (
            <div id="overlay">
                <TopBar />
                <Button
                    value="Log In"
                    toggleModal={this.toggleModal}
                    className="button-login"
                />
                <Button
                    value="Sign Up"
                    toggleModal={this.toggleModal}
                    className="button-signup"
                />
                {this.state.showLoginModal && (
                    <LoginModal toggleModal={this.toggleModal} />
                )}
            </div>
        );
    }
}

export default Overlay;
