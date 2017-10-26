import React from 'react';
import './Table.css';

const Table = props => {
    return <div className="table">{props.children}</div>;
};

export default Table;
