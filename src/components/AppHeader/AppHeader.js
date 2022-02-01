import React from "react";
import "./AppHeader.css";

export const AppHeader = ({toDo, done}) => {
    return (
        <div className="AppHeader d-flex">
            <h1>My Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
};
