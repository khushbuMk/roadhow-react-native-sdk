import React from "react";
import { Dimensions, Image, View } from "react-native";
import Images from "../constants/images";

export function Rating({ value }: any) {

    const emptyStars = Images.course_details.star_empty;
    const fullStars = Images.course_details.star_filled;

    const array = new Array(5).fill(fullStars, 0, value).fill(emptyStars, value, 5)

    console.log(array);

    return (
        <View style={{ width: Dimensions.get('screen').width, height: 50, justifyContent: 'center', flexDirection:'row' }}>

            {
                array.map(
                    (star, index) => {
                        return (
                            <Image
                                key={index}
                                source={star}
                                style={{ width: 20, height: 20, margin:2 }}
                            />
                        );
                    }
                )
            }
        </View>
    )
}
