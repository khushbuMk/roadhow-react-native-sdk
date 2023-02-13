import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { Colors } from "../constants";

export function SummaryCard({ title, value, icon }: any) {

    return (
        <View style={{ width: Dimensions.get('screen').width * .43, height: 100, justifyContent: 'center' }}>
            <View

                style={{
                    backgroundColor: Colors.bgBlueColor,
                    padding: 8,
                    borderRadius: 5,
                    flex: 1,
                    // alignItems: 'center'
                }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={icon}
                        style={{ width: 40, height: 40, opacity: 0.7, tintColor:Colors.systemWhite }}
                        resizeMode={'contain'} />

                    <Text style={{
                        color: Colors.systemWhite,
                        fontWeight: 'bold',
                        textAlignVertical:'center', 
                        flex:1,
                        padding: 2,
                    }}>
                        {title}
                    </Text>
                </View>



                <View style={{ width:'100%', flex:1, alignContent:'flex-end', justifyContent:'flex-end' }}>
                    <Text style={{ textAlign:'right',textAlignVertical:'bottom', color: Colors.darkYellow, fontSize:20 }}>
                    {value}
                    </Text>
                </View>
            </View>
        </View>
    )
}
