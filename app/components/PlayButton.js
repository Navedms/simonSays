import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function PlayButton({
    onPress,
    onPressIn,
    onPressOut,
    isReady,
    backgroundColor = colors.primary,
    position = 'top',
    style
}) {
    return (
        <TouchableOpacity
            disabled={!isReady}
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            activeOpacity={1}
            style={[
                position === 'top' &&
                [styles.playButtonTop, { backgroundColor: backgroundColor }],
                position === 'right' &&
                [styles.playButtonRight, { backgroundColor: backgroundColor }],
                position === 'bottom' &&
                [styles.playButtonBottom, { backgroundColor: backgroundColor }],
                position === 'left' &&
                [styles.playButtonLeft, { backgroundColor: backgroundColor }],
                style
            ]}
        >
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    playButtonTop: {
        width: 150,
        height: 150,
        borderRadius: 50,
        transform: [{ rotate: '45deg' }],
        position: "absolute",
        top: '22%',
    },
    playButtonRight: {
        width: 150,
        height: 150,
        borderRadius: 50,
        transform: [{ rotate: '45deg' }],
        position: "absolute",
        right: 15,
    },
    playButtonBottom: {
        width: 150,
        height: 150,
        borderRadius: 50,
        transform: [{ rotate: '45deg' }],
        position: "absolute",
        bottom: '22%'
    },
    playButtonLeft: {
        width: 150,
        height: 150,
        borderRadius: 50,
        transform: [{ rotate: '45deg' }],
        position: "absolute",
        left: 15
    },

});

export default PlayButton;
