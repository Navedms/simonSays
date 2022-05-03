import React from "react";
import { Platform, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../config/colors";

function appIcon({
    name,
    size = 40,
    backgroundColor = colors.primary,
    iconColor = colors.white,
    borderRadius = size / 2,
    style,
}) {
    return (

        <View
            style={[{
                width: size,
                height: size,
                borderRadius: borderRadius,
                backgroundColor,
                justifyContent: "center",
                alignItems: "center",
            }, style]}
        >
            <Icon name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`} color={iconColor} size={size * 0.5} />
        </View>

    );
}

export default appIcon;
