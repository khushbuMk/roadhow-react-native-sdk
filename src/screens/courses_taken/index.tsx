import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Taken from './Taken';
import Summary from './Summary';
import { Colors } from '../../constants';
import { Image } from 'react-native';
import Images from "../../constants/images";
import { Provider } from 'react-redux';
import Store from '../../redux/store/store'


export default function CourseTaken(props: any) {
    props.navigation ?
        React.useEffect(() => {
            props.navigation.setOptions({
                title: 'Courses Taken',
            });
        }, [props])
        : null;

    const Tab = createMaterialTopTabNavigator();



    return (
        <Provider store={Store} >
            <NavigationContainer independent={true} >

                <Tab.Navigator
                    initialRouteName="Summary"
                    screenOptions={{
                        tabBarActiveTintColor: Colors.bgBlueColor,
                        tabBarInactiveTintColor: Colors.systemBlack,
                        tabBarLabelStyle: { fontSize: 12 },
                        tabBarStyle: {
                            backgroundColor: Colors.systemWhite,
                        },

                    }}>

                    <Tab.Screen
                        name="Summary"
                        component={Summary}
                        options={{
                            tabBarLabel: 'Course Summary',
                            tabBarIcon(props) {
                                return (
                                    <Image
                                        source={Images.icons.barGraph}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: props.focused ? Colors.bgBlueColor : props.color,

                                        }}
                                        resizeMode="contain"
                                    />
                                )
                            },
                        }} />

                    <Tab.Screen
                        name="Taken"
                        component={Taken}
                        options={{
                            tabBarLabel: 'Courses taken',
                            tabBarIcon(props) {
                                return (
                                    <Image
                                        source={Images.icons.tick}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: props.focused ? Colors.bgBlueColor : props.color,

                                        }}
                                        resizeMode="contain"
                                    />
                                )
                            },
                        }} />

                </Tab.Navigator>

            </NavigationContainer>
        </Provider>
    )
}