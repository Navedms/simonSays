import types from "../types";

const initialState = {
    game: [],
    gameresults: []
};

function gameReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_GAME:
            return { ...state, game: [...state.game, action.payload] };
        case types.GAME_OVER:
            return { ...state, game: [] };
        case types.ADD_GAME_RESULTS:
            return {
                ...state,
                gameresults: [...state.gameresults, action.payload]
            };
        case types.SORT_GAME_RESULTS:
            return {
                ...state,
                gameresults: state.gameresults.sort((a, b) => parseFloat(b.score) - parseFloat(a.score)).slice(0, 10)
            };
        case types.RESET_RESULTS:
            return { ...state, gameresults: [] };
        default:
            return state;
    }
}

export default gameReducer;