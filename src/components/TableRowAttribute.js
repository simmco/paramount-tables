import React from 'react';
import classnames from 'classnames';
import './TableRow.css';

export default class TableRowAttribute extends React.Component {
    render() {
        const { selected } = this.props;
        const tableRowStyle = classnames('tableRow', { 'tableRow-selected': selected });
        return (
            <div className={tableRowStyle} onClick={() => this.props.handleOnClick(this.props.attribute.id)}>
                <span className="tableRow-content">{this.props.attribute.name}: </span>
                <span>{this.props.attribute.values.map(value => value.name).join(', ')}</span>
            </div>
        );
    }
}
