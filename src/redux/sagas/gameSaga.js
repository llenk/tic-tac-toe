import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getBoard(action) {
    try {
        let board = yield call(axios.get, '/api/game/');
        yield put({type: 'SET_BOARD', payload: board});
    } catch (error) {
        console.log(error);
    }
}

function* gameSaga() {
    yield takeLatest('GET_BOARD', getBoard);
}

export default gameSaga;