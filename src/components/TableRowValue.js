import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as actions from '../actions';
import './TableRow.css';

class TableRowValue extends React.Component {
    render() {
        const { rank, name } = this.props.value;
        const { selected, value } = this.props;

        const tableStyle = classnames(
            'tableRow',
            { 'tableRow-levelOne': rank === 1 },
            { 'tableRow-levelTwo': rank === 2 },
            { 'tableRow-levelThree': rank === 3 },
            { 'tableRow-isChoosen': selected }
        );
        return (
            <div className={tableStyle} onClick={() => this.props.handleOnClick(selected, value)}>
                <span className="tableRow-content">{name}</span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        attributes: state.attributes,
    };
}

export default connect(mapStateToProps, actions)(TableRowValue);
