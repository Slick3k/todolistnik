import React from "react";
const searchText = 'type here to search';
const searchStyle = {
    fontSize: '25px'
};
export const SearchPanel = () => {
    return <input  placeholder={searchText} style={searchStyle}/>;
};
