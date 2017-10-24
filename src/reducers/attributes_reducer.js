import { GET_ALL_ATTRIBUTES, SELECT_ATTRIBUTE, ADD_VALUE, REMOVE_VALUE } from '../actions/types';

function getSelectedAttributesValueIds(currentId, items) {
    let selectedAttributes = [];
    const currentAttribute = items.find(attribute => attribute.id === currentId);
    if (currentAttribute) {
        selectedAttributes = currentAttribute.values.map(value => value.id);
    }
    return selectedAttributes;
}

export default function(
    state = {
        items: [],
        selectedAttributeId: '',
        selectedAttributeValuesIds: [],
    },
    action
) {
    switch (action.type) {
        case GET_ALL_ATTRIBUTES:
            return Object.assign({}, state, {
                items: action.payload,
            });
        case SELECT_ATTRIBUTE:
            const selectedAttribute = state.items.find(attribute => attribute.id === action.id);
            return Object.assign({}, state, {
                selectedAttributeId: selectedAttribute.id,
                selectedAttributeValuesIds: selectedAttribute.values.map(value => value.id),
            });
        case ADD_VALUE:
            const itemsAdded = state.items.map(item => {
                const newValue = { id: action.payload.id, name: action.payload.name };
                if (item.id === action.id) {
                    item.values.push(newValue);
                }
                return item;
            });
            return Object.assign({}, state, {
                items: itemsAdded,
                selectedAttributeValuesIds: getSelectedAttributesValueIds(state.selectedAttributeId, itemsAdded),
            });
        case REMOVE_VALUE:
            const itemsRemoved = state.items.map(item => {
                if (item.id === action.id) {
                    const val = item.values.filter(value => {
                        return value.id !== action.payload.id;
                    });
                    item.values = val;
                    return item;
                }
                return item;
            });
            return Object.assign({}, state, {
                items: itemsRemoved,
                selectedAttributeValuesIds: getSelectedAttributesValueIds(state.selectedAttributeId, itemsRemoved),
            });
        default:
            return state;
    }
}
