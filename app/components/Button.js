import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import defaultStyle from "../config/style";
import colors from "../config/colors";
import Icon from "./Icon";
import Text from "./Text";

function AppButton({
    title,
    onPress,
    fontWeight = "bold",
    fontSize = 18,
    color = "white",
    backgroundColor = colors.primary,
    icon,
    iconColor = "white",
    iconSize = 22,
    style
}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[defaultStyle.rtlRow, styles.button, { backgroundColor: backgroundColor }, style]}>
                {icon && <Icon style={styles.icon} name={icon} size={iconSize} color={iconColor} />}
                <Text style={[styles.text, { color: color, fontWeight: fontWeight, fontSize: fontSize }]}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
    },
    text: {
        textTransform: "uppercase",
    },
    icon: {
        paddingLeft: 6,
    },
});

export default AppButton;
