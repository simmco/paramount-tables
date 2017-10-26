import { GET_ALL_ATTRIBUTES, SELECT_ATTRIBUTE, ADD_VALUE, REMOVE_VALUE } from '../actions/types';

export default function(
    state = {
        attributes: [],
        selectedAttributeId: '',
    },
    action
) {
    switch (action.type) {
        case GET_ALL_ATTRIBUTES:
            return {
                ...state,
                attributes: action.payload,
            };
        case SELECT_ATTRIBUTE:
            return {
                ...state,
                selectedAttributeId: state.attributes.find(attribute => attribute.id === action.id).id,
            };
        case ADD_VALUE:
            return {
                ...state,
                attributes: state.attributes.map(attribute => {
                    if (attribute.id === action.payload.attributeId) {
                        const newValue = { id: action.payload.value.id, name: action.payload.value.name };
                        return {
                            ...attribute,
                            values: [...attribute.values, newValue],
                        };
                    } else {
                        return attribute;
                    }
                }),
            };
        case REMOVE_VALUE:
            return {
                ...state,
                attributes: state.attributes.map(attribute => {
                    if (attribute.id === action.payload.attributeId) {
                        return {
                            ...attribute,
                            values: attribute.values.filter(value => value.id !== action.payload.value.id),
                        };
                    } else {
                        return attribute;
                    }
                }),
            };
        default:
            return state;
    }
}
