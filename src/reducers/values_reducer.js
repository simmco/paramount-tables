import { GET_ALL_VALUES } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_ALL_VALUES:
            // We only handle sort by rank so it's default
            return (state = action.payload.sort((a, b) => a.rank - b.rank));
        default:
            return state;
    }
}
