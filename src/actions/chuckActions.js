import axios from 'axios';

export const FETCH_CHUCKY_START = 'FETCH_CHUCKY_START';
export const FETCH_CHUCKY_SUCCESS = 'FETCH_CHUCKY_SUCCESS';
export const FETCH_CHUCKY_FAILURE = 'FETCH_CHUCKY_FAILURE';

export const fetchChuckJoke = () => dispatch => {
    dispatch({ type: FETCH_CHUCKY_START });
    axios
    .get('http://api.icndb.com/jokes/random')
    .then(res => {
        dispatch({ type: FETCH_CHUCKY_SUCCESS, payload: res.data.value.joke});
    }).catch(err => dispatch({ type: FETCH_CHUCKY_FAILURE, payload: err.message }));
}