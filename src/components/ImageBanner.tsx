import React from "react";
import { Dimensions, Image, View } from "react-native";
import Images from "../constants/images";

export function ImageBanner({src}: any) {

    const imgSrc = src || Images.placeholder;

    const scaleHeight = ({ source, desiredWidth }: any) => {
        const { width, height } = Image.resolveAssetSource(source)
        return (desiredWidth / width * height)   || 200
    }

    const imageWidth = Dimensions.get('window').width;
    const imageHeight = scaleHeight({
        source: imgSrc,
        desiredWidth: imageWidth
    })

    return (
        <View style={{ width: imageWidth, height: imageHeight }}>
            <Image
                style={{ width: imageWidth, height: imageHeight }}
                resizeMode={'contain'}
                source={imgSrc} />
        </View>
    )
}
