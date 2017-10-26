import { GET_ALL_ATTRIBUTES, GET_ALL_VALUES, SELECT_ATTRIBUTE, ADD_VALUE, REMOVE_VALUE } from './types';

const URL = 'http://demo0113689.mockable.io';

export const getAllAttributes = () => async dispatch => {
    try {
        const response = await fetch(URL + '/attribute_values');
        const attributes = await response.json();

        const flattenAttributes = attributes.map(attribute => {
            return {
                ...attribute,
                values: attribute.values.map(value => value.id),
            };
        });
        console.log('flattenAttributes', flattenAttributes);
        
        dispatch({
            type: GET_ALL_ATTRIBUTES,
            payload: attributes,
        });
    } catch (err) {
        console.log(err);
    }
};

export const getAllValues = () => async dispatch => {
    try {
        const response = await fetch(URL + '/values');
        const attributes = await response.json();
        dispatch({
            type: GET_ALL_VALUES,
            payload: attributes,
        });
    } catch (err) {
        console.log(err);
    }
};

export const valueServerRequest = async (attributeId, valueId) => {
    const response = await fetch(URL + `/attribute_values?attribute_id=${attributeId}&value_id=${valueId}`, {
        method: 'PATCH',
        mode: 'cors',
    });
    return await response.json();
};

export const selectAttribute = id => {
    return {
        type: SELECT_ATTRIBUTE,
        id: id,
    };
};

const addValue = (attributeId, value) => {
    return {
        type: ADD_VALUE,
        payload: {
            value: value,
            attributeId,
        },
    };
};

const removeValue = (attributeId, value) => {
    return {
        type: REMOVE_VALUE,
        payload: {
            value: value,
            attributeId,
        },
    };
};

export const addValueAction = (attributeId, value) => async dispatch => {
    try {
        dispatch(addValue(attributeId, value));
        await valueServerRequest(attributeId, value.id);
    } catch (e) {
        // undo the state change
        dispatch(removeValue(attributeId, value));

        // here we can dispatch an error for the UI
    }
};

export const removeValueAction = (attributeId, value) => async dispatch => {
    try {
        dispatch(removeValue(attributeId, value));
        await valueServerRequest(attributeId, value.id);
    } catch (e) {
        // undo the state change
        dispatch(addValue(attributeId, value));
        // here we can dispatch an error for the UI
    }
};
