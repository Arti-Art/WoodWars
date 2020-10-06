import React from "react";
import axios from "axios";
import Button from "./button";
import TopBar from "./topbar";
import Rules from "./rules";
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
            showRules: false,
            email: "",
            password: "",
            color: "#FF0000",
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.toggleLeaderboard = this.toggleLeaderboard.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        this.toggleRules = this.toggleRules.bind(this);
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
            showRules: false,
        });
        console.log("state.logged set to false // You Logged Out");
    }
    toggleLeaderboard() {
        this.setState({
            showLeaderboard: !this.state.showLeaderboard,
            showRules: false,
        });
        console.log("leaderbord TOGGLED!");
    }
    toggleRules() {
        this.setState({
            showRules: !this.state.showRules,
        });
        console.log("RULES TOGGLED!");
    }
    // toggleModal(name) {
    //     // const {name} = event.target;
    //     this.setState({
    //         [name]: !this.state.name,
    //     });
    // }
    render() {
        return (
            <div id="overlay">
                {(!this.state.logged || this.state.showLeaderboard) && (
                    <div id="darken-map" />
                )}
                <TopBar />
                {this.state.logged && (
                    <>
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
                            name="showRules"
                            handleClick={this.toggleRules}
                            className="button-rules"
                        />
                    </>
                )}
                {this.state.showLeaderboard && (
                    <Leaderboard state={this.state} />
                )}
                {this.state.showRules && <Rules state={this.state} />}
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
