import React from "react";

class LoginModal extends React.Component {
    constructor() {
        super();
        this.state = {email: "", password: ""};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        });
    }
    handleClick() {
        console.log("the Class based component method handleClick works");
    }
    render() {
        return (
            <div id="login-modal">
                <input
                    type="text"
                    name="email"
                    placeholder="e-mail"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    minLength="4"
                    required
                />
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
        );
    }
}

// function LoginModal(props) {
//     return (
//         <div id="login-modal">
//             <input
//                 type="text"
//                 name="email"
//                 placeholder="e-mail"
//                 value={props.value.email}
//                 onChange={props.onChange}
//                 required
//             />
//             <input
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 value={props.value.password}
//                 onChange={props.onChange}
//                 minLength="4"
//                 required
//             />
//             <br />
//             <input
//                 type="button"
//                 value="LOG IN"
//                 onClick={props.onClick}
//                 className="button"
//             />
//             <input
//                 type="button"
//                 value="close"
//                 onClick={props.handleModal}
//                 className="button"
//             />
//         </div>
//     );
// }

export default LoginModal;
