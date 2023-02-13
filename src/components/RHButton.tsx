import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

export function RHButton({ color, title, onPress }: any) {

    return (
        <View style={{ width: Dimensions.get('screen').width, height: 50, justifyContent: 'center', flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor: `${color}30`,
                    padding: 10,
                    marginVertical: 5,
                    paddingVertical: 15,
                }}>
                <Text style={{ color: color }}>
                    <Text style={{
                        textTransform: 'uppercase',
                        color: color,
                        fontWeight: 'bold'
                    }}>
                        {title}
                    </Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}
