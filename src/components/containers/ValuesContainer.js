import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Table from '../ui/Table';
import TableRowValue from '../TableRowValue';

class ValuesContainer extends React.Component {
    componentDidMount() {
        this.props.getAllValues();
    }
    handleValueOnClick(selected, value) {
        const { selectedAttributeId } = this.props;
        if (selected) {
            this.props.removeValueAction(selectedAttributeId, value);
        } else {
            this.props.addValueAction(selectedAttributeId, value);
        }
    }
    isValueSelected(id) {
        return this.props.selectedAttributeValuesIds.includes(id);
    }
    sortValuesByRank(values) {
        return values.sort((a, b) => a.rank - b.rank);
    }
    render() {
        const sortedByRank = this.sortValuesByRank(this.props.values);
        return (
            <div>
                <h3>Values</h3>
                <Table>
                    {sortedByRank.map(value => (
                        <TableRowValue
                            key={value.id}
                            value={value}
                            handleOnClick={(selected, id) => this.handleValueOnClick(selected, id)}
                            selected={this.isValueSelected(value.id)}
                        />
                    ))}
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        values: state.values,
        attributes: state.attributes.items,
        selectedAttributeValuesIds: state.attributes.selectedAttributeValuesIds,
        selectedAttributeId: state.attributes.selectedAttributeId,
    };
}

export default connect(mapStateToProps, actions)(ValuesContainer);
