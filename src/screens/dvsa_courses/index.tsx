import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../constants';
import Summary from '../courses_taken/Summary';
import Taken from '../courses_taken/Taken';
import { StyleSheet, Text, View } from 'react-native';
import { CustomTabBarIndicator } from '../../components';

export default function DVSACourses(props: any) {
    props.navigation ?
        React.useEffect(() => {
            props.navigation.setOptions({
                title: 'DVSA Learner Hub',
            });
        }, [props])
        : null;

    const Tab = createMaterialTopTabNavigator();

    return (
        <NavigationContainer
            independent={true}
        >
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: Colors.bgBlueColor,
                    tabBarInactiveTintColor: Colors.systemBlack,
                    tabBarIndicatorContainerStyle: {
                        marginBottom: 12
                    },
                    tabBarIndicator: CustomTabBarIndicator,
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    tabBarStyle: {
                        backgroundColor: Colors.systemWhite,
                        elevation: 0,
                        justifyContent: 'flex-start'
                    },
                    tabBarContentContainerStyle: {
                        width: 10
                    }
                }}>

                <Tab.Screen
                    name="Theory"
                    component={Summary}
                    options={{
                        tabBarLabel: 'Theory',
                        tabBarLabelStyle: Styles.labelStyle
                    }} />

                <Tab.Screen
                    name="HazardPerception"
                    component={Taken}
                    options={{
                        tabBarLabel: 'Hazard Perception',
                        tabBarLabelStyle: Styles.labelStyle
                    }} />

                <Tab.Screen
                    name="RoadSigns"
                    component={Taken}
                    options={{
                        tabBarLabel: 'Road Signs',
                        tabBarLabelStyle: Styles.labelStyle
                    }} />


            </Tab.Navigator>


        </NavigationContainer>
    )
}

const Styles = StyleSheet.create({
    labelStyle: {
        textTransform: 'capitalize',
    },
})