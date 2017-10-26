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
                            handleOnClick={(selected, value) => this.handleValueOnClick(selected, value)}
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
        values: state.valuesState,
        selectedAttributeValuesIds: getSelectedAttributesValueIds(
            state.attributesState.selectedAttributeId,
            state.attributesState.attributes
        ),
        selectedAttributeId: state.attributesState.selectedAttributeId,
    };
}

export default connect(mapStateToProps, actions)(ValuesContainer);

function getSelectedAttributesValueIds(currentId, attributes) {
    let selectedAttributes = [];
    const currentAttribute = attributes.find(attribute => attribute.id === currentId);
    if (currentAttribute) {
        selectedAttributes = currentAttribute.values.map(value => value.id);
    }
    return selectedAttributes;
}
