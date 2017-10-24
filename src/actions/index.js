import { GET_ALL_ATTRIBUTES, GET_ALL_VALUES, SELECT_ATTRIBUTE, ADD_VALUE, REMOVE_VALUE } from './types';

const URL = 'http://demo0113689.mockable.io';

export function getAllAttributes() {
    return async function(dispatch) {
        try {
            const response = await fetch(URL + '/attribute_values');
            const attributes = await response.json();
            dispatch({
                type: GET_ALL_ATTRIBUTES,
                payload: attributes,
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export function getAllValues() {
    return async function(dispatch) {
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
}

export async function addValueServerRequest() {
    const response = await fetch(URL + '/attribute_values?attribute_id=1&value_id=2', {
        method: 'PATCH',
        mode: 'cors',
    });
    return await response.json();
}

export function selectAttribute(id) {
    return {
        type: SELECT_ATTRIBUTE,
        id: id,
    };
}

function addValue(attributeId, value) {
    return {
        type: ADD_VALUE,
        id: attributeId,
        payload: value,
    };
}

function removeTodo(attributeId, value) {
    return {
        type: REMOVE_VALUE,
        id: attributeId,
        payload: value,
    };
}

export const addValueAction = (attributeId, value) => async dispatch => {
    try {
        dispatch(addValue(attributeId, value));
        await addValueServerRequest();
    } catch (e) {
        // undo the state change
        dispatch(removeTodo(attributeId, value));

        // here we can dispatch an error for the UI
    }
};
export const removeValueAction = (attributeId, value) => async dispatch => {
    try {
        dispatch(removeTodo(attributeId, value));
        await addValueServerRequest();
    } catch (e) {
        // undo the state change
        dispatch(addValue(attributeId, value));
        // here we can dispatch an error for the UI
    }
};
