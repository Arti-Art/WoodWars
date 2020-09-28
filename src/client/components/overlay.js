import React from "react";
import TopBar from "./topbar";
import RightPane from "./rightpane";
import LoginModal from "./loginmodal";
import "../styles/overlay.css";

class Overlay extends React.Component {
    constructor() {
        super();
        this.state = {showLoginModal: true};
    }
    handleClick() {
        console.log("it Works");
    }
    render() {
        return (
            <div id="overlay">
                <TopBar />
                {this.state.showLoginModal ? <LoginModal onClick={this.handleClick} /> : "" }
                <RightPane />
            </div>
        );
    }
}

export default Overlay;
