import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../constants';
import Summary from '../courses_taken/Summary';
import Taken from '../courses_taken/Taken';

import { useFonts } from 'expo-font';
import { CustomTabBarIndicator } from '../../components';

export default function RoadHowCourses(props: any) {
    props.navigation ?
        React.useEffect(() => {
            props.navigation.setOptions({
                title: 'Driver Hub',
            });
        }, [props])
        : null;

    const Tab = createMaterialTopTabNavigator();
    const [loaded] = useFonts({
        // Poppins: require('../../../assets/fonts/Poppins/Poppins-Regular.otf'),
        
    });
    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer
            independent={true}
        >
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: Colors.bgBlueColor,
                    tabBarInactiveTintColor: Colors.systemBlack,
                    tabBarIndicatorContainerStyle: {
                        marginBottom: 11
                    },
                    tabBarIndicator: CustomTabBarIndicator,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        color: Colors.systemBlack,
                        textAlignVertical: 'top',
                        textTransform:'capitalize',
                        fontFamily:"Poppins"
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
                    name="RoadKnowledge"
                    component={Summary}
                    options={{ tabBarLabel: 'Road Knowledge' }} />

                <Tab.Screen
                    name="RoadPerception"
                    component={Taken}
                    options={{ tabBarLabel: 'Road Perception' }} />

            </Tab.Navigator>


        </NavigationContainer>
    )
}