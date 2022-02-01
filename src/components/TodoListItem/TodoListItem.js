import React from "react";
import './TodoListItem.css';

export const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };
    return (
        <span className='TodoListItem'>
            <span className='TodoListItemLabel' style={style}>
            { label }
            </span>

            <button type="button"
            className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button"
            className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    );
};
