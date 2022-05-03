import React from 'react';
import { StyleSheet } from 'react-native';

import Button from '../components/Button';
import PlayButton from '../components/PlayButton';
import colors from '../config/colors';
import useGame from '../hooks/useGame';
import Sounds from '../components/Sounds';
import Screen from '../components/Screen';

function GameScreen() {

    const {
        isPlaying,
        isUserDone,
        isReady,
        setIsReady,
        activeColor,
        setActiveColor,
        handleStartPress,
        handlePlayPress,
        moves,
        isGameOver
    } = useGame();

    const simonReturn = (list, now) => {
        if (list && now) {

            setTimeout(() => {
                simonReturnTiming(0, list.length, list)
            }, 1500);
        }
    }
    function simonReturnTiming(i, n, list) {
        if (i < n) {
            setActiveColor(list[i]);
            if (list[i] === 1) { Sounds.top.stop().play(); }
            else if (list[i] === 2) { Sounds.right.stop().play(); }
            else if (list[i] === 3) { Sounds.bottom.stop().play(); }
            else if (list[i] === 4) { Sounds.left.stop().play(); }
            setTimeout(() => { setActiveColor(0) }, 800);
            setTimeout(simonReturnTiming, 1000, ++i, n, list);
        } else {
            setIsReady(true);
        }
    }


    return (
        <Screen style={styles.container}>
            <PlayButton
                position='top'
                backgroundColor={activeColor !== 1 ? colors.top : colors.topActive}
                isReady={isReady}
                onPress={() => simonReturn(handlePlayPress(1), isUserDone)}
                onPressIn={() => setActiveColor(1)}
                onPressOut={() => setActiveColor(0)}
            />
            <PlayButton
                position='right'
                backgroundColor={activeColor !== 2 ? colors.right : colors.rightActive}
                isReady={isReady}
                onPress={() => simonReturn(handlePlayPress(2), isUserDone)}
                onPressIn={() => setActiveColor(2)}
                onPressOut={() => setActiveColor(0)}
            />
            <PlayButton
                position='bottom'
                backgroundColor={activeColor !== 3 ? colors.bottom : colors.bottomActive}
                isReady={isReady}
                onPress={() => simonReturn(handlePlayPress(3), isUserDone)}
                onPressIn={() => setActiveColor(3)}
                onPressOut={() => setActiveColor(0)}
            />
            <PlayButton
                position='left'
                backgroundColor={activeColor !== 4 ? colors.left : colors.leftActive}
                isReady={isReady}
                onPress={() => simonReturn(handlePlayPress(4), isUserDone)}
                onPressIn={() => setActiveColor(4)}
                onPressOut={() => setActiveColor(0)}
            />
            <Button
                style={[styles.start, { borderColor: isReady ? colors.blink : colors.black }]}
                title={isPlaying ? isGameOver ? "Game Over" : moves : "Start"}
                backgroundColor={isPlaying ? isGameOver ? colors.secondary : colors.white : colors.black}
                color={isPlaying ? isGameOver ? colors.white : colors.black : colors.white}
                fontSize={isPlaying ? isGameOver ? 20 : 40 : 28}
                onPress={() => simonReturn(handleStartPress(), true)}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backfaceVisibility: 'hidden',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    start: {
        width: 160,
        height: 160,
        borderRadius: 80,
        zIndex: 1,
        borderWidth: 5,
        borderColor: colors.black
    }
});

export default GameScreen;