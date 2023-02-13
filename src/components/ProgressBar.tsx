import React from "react";
import { Dimensions, Image, View } from "react-native";
import { Colors } from "../constants";
import Images from "../constants/images";

export function ProgressBar({ value }: any) {

    return (
        <View style={{
            width: Dimensions.get('screen').width,
            height: 50,
            justifyContent: 'center',
            flexDirection: 'row',
            padding: 10
        }}>
            <View style={{
                backgroundColor: Colors.systemLightGray,
                width: Dimensions.get('screen').width * 0.9,
                height: 5,
                borderRadius: 10,
                overflow: 'hidden'
            }}>
                <View style={{
                    backgroundColor: 'skyblue',
                    width: Dimensions.get('window').width * .9 * value / 100,
                    height: 5
                }} />
            </View>
        </View>
    )
}
