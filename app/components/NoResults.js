import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import Text from './Text';
import colors from '../config/colors';

function NoResults({ title, text, iconName, iconColor = colors.dark, flex = true, Button }) {
    return (
        <View style={[styles.container, flex && { flex: 1, justifyContent: 'center' }]}>
            <Icon name={iconName} size={48} color={iconColor} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            {Button && Button}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: -1,
    },
    title: {
        paddingTop: 10,
        fontSize: 22,
        textAlign: 'center',
    },
    text: {
        paddingTop: 2,
        fontSize: 16,
        color: colors.dark,
        textAlign: 'center',
    }
});

export default NoResults;