import React from 'react';
import classnames from 'classnames';
import './TableRow.css';

export default class TableRowValue extends React.Component {
    render() {
        const { rank, name } = this.props.value;
        const { selected, value } = this.props;

        const tableStyle = classnames(
            'tableRow',
            { 'tableRow-levelOne': rank === 1 },
            { 'tableRow-levelTwo': rank === 2 },
            { 'tableRow-levelThree': rank === 3 },
            { 'tableRow-selected': selected }
        );
        return (
            <div className={tableStyle} onClick={() => this.props.handleOnClick(selected, value)}>
                <span className="tableRow-content">{name}</span>
            </div>
        );
    }
}