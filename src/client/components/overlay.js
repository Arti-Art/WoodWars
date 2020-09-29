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
        // this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        console.log("it still Works");
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
                    onClick={this.handleClick}
                    className="button-login"
                />
                <Button
                    value="Sign Up"
                    onClick={this.handleClick}
                    className="button-signup"
                />
                {this.state.showLoginModal && <LoginModal />}
            </div>
        );
    }
}

export default Overlay;
