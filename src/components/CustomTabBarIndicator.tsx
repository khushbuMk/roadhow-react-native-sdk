import React from "react";
import { Image, View } from "react-native";
import { Colors, Images } from "../constants";
// import Icon from 'react-native-ionicons'
import Icon from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons';

export function CustomTabBarIndicator(props: any) {

    const { getTabWidth, width, state, style, gap } = props;
    const { routes } = state;


    console.log(getTabWidth(0), routes[state.index], state.index);

    // {
    //     "gap": 0, 
    //     "getTabWidth": [Function getTabWidth], 
    //     "jumpTo": [Function anonymous], 
    //     "layout": {"height": 59.33332824707031, "width": 390}, 
    //     "position": 0, 
    //     "state": {
    //         "history": [[Object]], 
    //         "index": 0, 
    //         "key": "tab-AzZXGkmua2zv8HOgA-rDK", 
    //         "routeNames": ["Theory", "HazardPerception", "RoadSigns"], 
    //         "routes": [[Object], [Object], [Object]], 
    //         "stale": false, 
    //         "type": "tab"
    //     }, 
    //     "style": 
    //     [{"backgroundColor": "rgb(0, 122, 255)"}, {"backgroundColor": "red", "height": 5}], 
    //     "width": "33.333333333333336%"
    // }

    return (
        <View style={{
            backgroundColor: Colors.bgBlueColor,
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            height: 2
        }}>
            <View style={{
                height: 20,
                width: getTabWidth(state.index),
                // backgroundColor: 'red',
                alignSelf: state.routes.length === 3 ?
                    state.index == 0 ? 'flex-start' : state.index == 1 ? 'center' : 'flex-end' 
                    : 
                    state.index == 0 ? 'flex-start' : 'flex-end' 
            }}>
                <View style={{ height: 15, width: 15, backgroundColor: Colors.systemWhite, alignSelf: 'center' }}>
                    {/* <AntDesign name="left" size={24} color={Colors.bgBlueColor} /> */}
                    {/* <Icon name="down" size={20} color={Colors.bgBlueColor} /> */}
                    <Image source={Images.icons.downArrow} style={{ width: 30, height: 30, top: -10, left: -8, tintColor: Colors.bgBlueColor }} resizeMode={'contain'} />
                </View>

            </View>

        </View>
    )
}
