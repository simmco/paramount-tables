import React from 'react';
import './Table.css';

export default class Table extends React.Component {
    render() {
        return <div className="table">{this.props.children}</div>;
    }
}
F