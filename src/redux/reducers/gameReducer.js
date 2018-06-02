// import { combineReducers } from 'redux';

const board = (state = {}, action) => {
    switch (action.type) {
        case 'SET_BOARD':
            return action.payload.data;
        default: return state;
    }
}

export default board;