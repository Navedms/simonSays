import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import Button from '../components/Button';
import EnterName from '../components/EnterName';
import NoResults from '../components/NoResults';
import { resetRouteParams, resetRouteParamsAll } from '../components/resetRouteParams';
import Screen from '../components/Screen';
import colors from '../config/colors';
import useGameResults from '../hooks/useGameResults';
import routes from '../navigation/routes';
import Score from '../components/Score';

function GameResultsScreen({ navigation, route }) {
    const score = route.params?.newScore;
    const tryAgain = route.params?.tryAgain;

    const isFocused = useIsFocused();

    const {
        addNewResults,
        gameresults,
        pressResetResults
    } = useGameResults();

    const handleOnPressEnterName = (name) => {
        addNewResults(name, score);
        resetRouteParams(navigation);
    }

    const sorfItBy = (list) => {
        return list.sort((a, b) => parseFloat(b.score) - parseFloat(a.score)).slice(0, 10);
    }

    useEffect(() => {
        if (!score) { resetRouteParamsAll(navigation) }
    }, [navigation, isFocused]);

    return (
        <Screen style={styles.container}>
            {score &&
                <EnterName onPress={(name) => handleOnPressEnterName(name)} />
            }
            {(gameresults === undefined || gameresults.length === 0) &&
                <NoResults
                    title="No results to display"
                    text="Play the game, and your best results will appear here"
                    iconName="search-outline"
                    Button={
                        <Button
                            title="Let's Play"
                            onPress={() => navigation.navigate(routes.GAME.name)}
                        />
                    }
                />
            }
            {gameresults.length > 0 &&
                <FlatList
                    data={sorfItBy(gameresults)}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <Score
                            rank={index + 1}
                            title={item.name}
                            score={item.score}
                            time={item.time}
                        />
                    )}
                />
            }
            {gameresults.length > 0 &&
                <View style={styles.btnsContainer}>
                    {tryAgain && <Button title="Try again" onPress={() => navigation.navigate(routes.GAME.name)} />}
                    <Button title="Reset Results" onPress={pressResetResults} backgroundColor={colors.secondary} />
                </View>
            }

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    btnsContainer: {
        padding: 10,
    }
});

export default GameResultsScreen;