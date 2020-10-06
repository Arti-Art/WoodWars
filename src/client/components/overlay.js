import React from "react";
import axios from "axios";
import Button from "./button";
import TopBar from "./topbar";
import LoginModal from "./loginmodal";
import Leaderboard from "./leaderboard";
import "../styles/overlay.css";

class Overlay extends React.Component {
    constructor() {
        super();
        this.state = {
            logged: false,
            showSignup: false,
            showLeaderboard: false,
            email: "",
            password: "",
            color: "#FF0000",
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.toggleLeaderboard = this.toggleLeaderboard.bind(this);
    }
    // componentDidMount() {
    //     console.log("component did mount");
    //     axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
    //         res.data.map(x => console.log(x));
    //     });
    // }
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
    logIn() {
        this.setState({
            logged: true,
        });
        console.log("state.logged set to true // You Logged In");
    }
    logOut() {
        this.setState({
            logged: false,
            showLeaderboard: false,
        });
        console.log("state.logged set to false // You Logged Out");
    }
    toggleLeaderboard() {
        this.setState({
            showLeaderboard: !this.state.showLeaderboard,
        });
        console.log("leaderbord TOGGLED!");
    }

    render() {
        return (
            <div id="overlay">
                {(!this.state.logged || this.state.showLeaderboard) && (
                    <div id="darken-map" />
                )}
                <TopBar />
                {this.state.logged && (
                    <div id="hud">
                        <Button
                            value="Log Out"
                            handleClick={this.logOut}
                            className="button-logout"
                        />
                        <Button
                            value="Leaderboard"
                            handleClick={this.toggleLeaderboard}
                            className="button-leaderboard"
                        />
                        <Button
                            value="Game Rules"
                            handleClick={this.toggleLeaderboard}
                            className="button-rules"
                        />
                    </div>
                )}
                {this.state.showLeaderboard && (
                    <Leaderboard state={this.state} />
                )}
                {!this.state.logged && (
                    <LoginModal
                        state={this.state}
                        handleChange={this.handleChange}
                        toggleSignup={this.toggleSignup}
                        logIn={this.logIn}
                    />
                )}
            </div>
        );
    }
}

export default Overlay;
