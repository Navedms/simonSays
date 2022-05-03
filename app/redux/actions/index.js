import types from '../types';

// GAME SCREEN


export const addToGame = number => dispatch => {
    dispatch({
        type: types.ADD_TO_GAME,
        payload: number
    });
    return true;
};

export const gameOver = () => dispatch => {
    dispatch({
        type: types.GAME_OVER,
        payload: null
    });
};

// RESULTS SCREEN

export const addGameResults = data => dispatch => {
    dispatch({
        type: types.ADD_GAME_RESULTS,
        payload: data
    });
    return true;
};

export const resetResults = () => dispatch => {
    dispatch({
        type: types.RESET_RESULTS,
        payload: null
    });
};

export const sortResults = () => dispatch => {
    dispatch({
        type: types.SORT_GAME_RESULTS,
        payload: null
    });
};
