import React from "react";

function RightPane(props) {
    return (
        <div id="right-pane">
            <h2>Right Pane</h2>
            <button type="button" value="Log In" onClick={props.onClick} />
            <p>Some other info</p>
        </div>
    );
}

export default RightPane;
