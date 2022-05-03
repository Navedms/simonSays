import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import GameResultsScreen from '../screens/GameResultsScreen';
import GameScreen from '../screens/GameScreen';

import routes from './routes';



const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name={routes.GAME.name}
                component={GameScreen}
                options={{
                    title: routes.GAME.title,
                    headerShown: false,
                    tabBarIcon: ({ size, color }) =>
                        <Icon
                            name={routes.GAME.icon} size={size} color={color}
                        />
                }}
            />
            <Tab.Screen
                name={routes.GAME_RESULTS.name}
                component={GameResultsScreen}
                options={{
                    title: routes.GAME_RESULTS.title,
                    tabBarIcon: ({ size, color }) =>
                        <Icon
                            name={routes.GAME_RESULTS.icon} size={size} color={color}
                        />
                }}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;