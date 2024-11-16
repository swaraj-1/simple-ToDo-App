import React from "react";

const Todoitem = (props) => {
    return (
        <li className="todoitem">
            <span>
            <input type="checkbox" className="checkbox" />
            <span className="todotext">{props.text}</span>
            </span>
            <p>...</p>
        </li>
    )
}

export default Todoitem;