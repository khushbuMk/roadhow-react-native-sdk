import React from "react";
import { Dimensions, Text, View } from "react-native";
import { Colors } from "../constants";


export function Header({ title }: any) {

    return (
        <View style={{
            height: 80,
            justifyContent: 'flex-end',
            width: Dimensions.get('screen').width,
            backgroundColor: Colors.systemWhite
        }}>
            <View style={{
                alignItems: 'center',
                height: 30
            }}>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    flex: 1,
                    textAlignVertical: 'center'
                }}>
                    {title}
                </Text>
            </View>
        </View>
    )
}
