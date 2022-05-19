import React from "react";
import Main from "./components/Main";
import ScoreScreen from "./components/ScoreScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{title:'Главная'}}
            />
            <Stack.Screen
                name="Table"
                component={ScoreScreen}
                options={{title:'Экран счета'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}