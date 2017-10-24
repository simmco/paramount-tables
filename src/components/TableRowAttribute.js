import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as actions from '../actions';
import './TableRow.css';

class TableRowAttribute extends React.Component {
    render() {
        const { selected } = this.props;
        const tableRowStyle = classnames('tableRow', { 'tableRow-isChoosen': selected });
        return (
            <div className={tableRowStyle} onClick={() => this.props.handleOnClick(this.props.attribute.id)}>
                <span className="tableRow-content">{this.props.attribute.name}: </span>
                <span>{this.props.attribute.values.map(value => value.name + ',')}</span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        attributes: state.attributes,
        values: state.values,
    };
}

export default connect(mapStateToProps, actions)(TableRowAttribute);
