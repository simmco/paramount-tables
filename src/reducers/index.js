import { combineReducers } from 'redux';
import attributes_reducer from './attributes_reducer';
import values_reducer from './values_reducer';

const rootReducer = combineReducers({
    attributesState: attributes_reducer,
    valuesState: values_reducer,
});

export default rootReducer;
