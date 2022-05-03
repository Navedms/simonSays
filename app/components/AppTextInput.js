import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import colors from '../config/colors';
import defaultStyle from "../config/style";

function AppTextInput({
    icon,
    value,
    backgroundColor = colors.light,
    border = 0,
    width = '100%',
    style,
    textStyle,
    ...otherProps
}) {
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor, borderWidth: border, width: width }, style]}>
            {icon && <Icon name={icon} size={28} color={colors.dark} style={styles.icon} />}
            <TextInput value={value} style={[defaultStyle.text, styles.input, textStyle]} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 12,
    },
    input: {
        textAlign: 'left',
        marginHorizontal: 10,
        color: colors.dark,
        flex: 1,
        flexWrap: 'wrap',
    }
});

export default AppTextInput;