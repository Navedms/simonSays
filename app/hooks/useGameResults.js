import { useSelector, useDispatch } from 'react-redux';

import { addGameResults, resetResults, sortResults } from '../redux/actions';

export default useGameResults = () => {

    const { gameresults } = useSelector(state => state.gameReducer);
    const dispatch = useDispatch();

    const addNewResult = (data) => {
        dispatch(addGameResults(data));
    }
    const pressResetResults = () => {
        dispatch(resetResults());
    }

    const pressSortResults = () => {
        dispatch(sortResults());
    }

    const addNewResults = (userName, userScore) => {
        const data = {
            id: `${userName}-${userScore}-${new Date().toISOString()}`,
            name: userName,
            score: userScore,
            time: new Date(),
        };
        addNewResult(data);
        pressSortResults();
    }

    return {
        addNewResults,
        gameresults,
        pressResetResults
    }
}