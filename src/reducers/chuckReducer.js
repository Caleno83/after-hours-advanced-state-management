import { FETCH_CHUCKY_FAILURE, FETCH_CHUCKY_START, FETCH_CHUCKY_SUCCESS } from '../actions/chuckActions';

export const initialState = {
    loading: false,
    errors: '',
    chuck: ''
};


const chuckReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_CHUCKY_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_CHUCKY_SUCCESS:
            return {
                ...state,
                chuck: action.payload,
                loading: false,
                errors: ''
            };
        case FETCH_CHUCKY_FAILURE:
            return {
                ...state,
                errors: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default chuckReducer;