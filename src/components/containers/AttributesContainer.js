import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Table from '../ui/Table';
import TableRowAttribute from '../TableRowAttribute';

class AttributesContainer extends React.Component {
    componentDidMount() {
        this.props.getAllAttributes();
    }
    handleAttributeOnClick(id) {
        this.props.selectAttribute(id);
    }
    isAttributeSelected(id) {
        return id === this.props.selctedAttributeId;
    }
    render() {
        return (
            <div>
                <h3>Attributes</h3>
                <Table>
                    {this.props.attributes.map(attribute => (
                        <TableRowAttribute
                            key={attribute.id}
                            attribute={attribute}
                            handleOnClick={() => this.handleAttributeOnClick(attribute.id)}
                            selected={this.isAttributeSelected(attribute.id)}
                        />
                    ))}
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        attributes: state.attributesState.attributes,
        selctedAttributeId: state.attributesState.selectedAttributeId,
    };
}

export default connect(mapStateToProps, actions)(AttributesContainer);
