import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { SafeAreaView } from 'react-native-safe-area-context';

function Screen({ children, style, titleColor, backgroundColor = colors.white }) {
    return (
        <SafeAreaView style={[styles.screen, { backgroundColor: titleColor }, style]}>
            <View style={[styles.view, { backgroundColor: backgroundColor }, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    view: {
        flex: 1,
    }
});

export default Screen;
