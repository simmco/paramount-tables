import { GET_ALL_VALUES } from '../actions/types';


export default function(state = [], action) {
    switch(action.type) {
        case GET_ALL_VALUES:
          return state = action.payload;
        default:
          return state;
      }
}