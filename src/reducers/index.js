import { combineReducers } from 'redux';
import attributes from './attributes_reducer';
import values from './values_reducer';

const rootReducer = combineReducers({
    attributes,
    values,
});

export default rootReducer;
