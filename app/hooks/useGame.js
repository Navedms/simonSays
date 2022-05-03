import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sounds from '../components/Sounds';
import { addToGame, gameOver } from '../redux/actions';
import routes from '../navigation/routes';
import navigation from '../navigation/rootNavigation';

export default useGame = () => {
    const [isReady, setIsReady] = useState(false);
    const [isUserDone, setIsUserDone] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [activeColor, setActiveColor] = useState(false);
    const [pressNum, setPressNum] = useState(0);
    const { game, gameresults } = useSelector(state => state.gameReducer);
    const dispatch = useDispatch();

    const deleteGame = () => dispatch(gameOver());
    const addNewNumber = num => dispatch(addToGame(num));

    const addandReturnNewRandonNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const moves = game.length;

    const handleStartPress = () => {
        if (isPlaying) {

        } else {
            Sounds.startGame.play();
            setIsUserDone(false);
            setIsReady(false);
            setIsPlaying(true);
            setPressNum(0);
            deleteGame();
            const newNumber = addandReturnNewRandonNumber(1, 4);
            addNewNumber(newNumber);
            setIsUserDone(true);
            return [newNumber];
        }
    }

    const handlePlayPress = (pressNumber) => {

        if (game[pressNum] !== pressNumber) {
            handleGameOver();
        }
        else {
            if (pressNumber === 1) { Sounds.top.stop().play(); }
            else if (pressNumber === 2) { Sounds.right.stop().play(); }
            else if (pressNumber === 3) { Sounds.bottom.stop().play(); }
            else if (pressNumber === 4) { Sounds.left.stop().play(); }
            setPressNum(pressNum + 1);
            if ((pressNum + 1) === game.length) {
                setTimeout(() => {
                    Sounds.startGame.play();
                }, 500);
                setIsUserDone(true);
                setIsReady(false);
                setPressNum(0);
                const newNumber = addandReturnNewRandonNumber(1, 4);
                addNewNumber(newNumber);
                return [...game, newNumber];
            }
        }
    }

    const handleGameOver = () => {
        Sounds.gameOver.play();
        setIsGameOver(true);
        deleteGame();
        setIsReady(false);
        setPressNum(0);
        setTimeout(() => {
            setIsPlaying(false);
            setIsGameOver(false);
            setIsUserDone(true);
            handleScoreToTop(moves);
        }, 1000);
    }
    const inTheTop = (moves) => {
        const topTen = gameresults.sort((a, b) => parseFloat(b.score) - parseFloat(a.score)).slice(0, 10);
        if (moves > topTen[9].score) return true;
        return false;
    }

    const handleScoreToTop = (moves) => {
        if (moves > 1) {
            if (gameresults.length <= 10 || inTheTop(moves)) {
                navigation.navigate(routes.GAME_RESULTS.name, { newScore: moves })
            }
        }
    }

    return {
        isPlaying,
        isUserDone,
        isReady,
        setIsReady,
        handleStartPress,
        activeColor,
        setActiveColor,
        handlePlayPress,
        moves,
        isGameOver
    }
}