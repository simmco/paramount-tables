import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Table from '../components/Table';
import TableRowValue from '../components/TableRowValue';
import { getValuesForSelectedAttribute } from '../selectors';

class ValuesContainer extends React.Component {
    componentDidMount() {
        this.props.getAllValues();
    }
    handleValueOnClick(selected, value) {
        const { selectedAttributeId } = this.props;
        if (selectedAttributeId) {
            if (selected) {
                this.props.removeValueAction(selectedAttributeId, value);
            } else {
                this.props.addValueAction(selectedAttributeId, value);
            }
        }
    }
    render() {
        return (
            <div>
                <h3>Values</h3>
                <Table>
                    {this.props.values.map(value => (
                        <TableRowValue
                            key={value.id}
                            value={value}
                            handleOnClick={(selected, value) => this.handleValueOnClick(selected, value)}
                            selected={value.selected}
                        />
                    ))}
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        values: getValuesForSelectedAttribute(state),
        selectedAttributeId: state.attributesState.selectedAttributeId,
    };
}

export default connect(mapStateToProps, actions)(ValuesContainer);
