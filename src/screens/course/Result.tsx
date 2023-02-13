import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ImageBanner } from '../../components/ImageBanner';
import Colors from '../../constants/color';
import images from '../../constants/images';

export default function Result() {
  const FlexBox = (title: any, value: any) => {
    return (
      <View style={styles.box}>
        <Text>
          {value}
        </Text>
        <Text style={{
          textTransform: 'uppercase',
          color: Colors.systemGray
        }}>
          {title}
        </Text>
      </View>
    )
  }

  const SelectBox = (title: any, description: any, color: any) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: `${color}30`,
          padding: 10,
          marginVertical: 5,
          paddingVertical: 15
        }}
      >
        <Text style={{ color: color }}>
          <Text style={{
            textTransform: 'uppercase',
            color: color,
            fontWeight: 'bold'
          }}>
            {'\t'}{title}</Text>{'\t\t'}{description}
        </Text>
      </TouchableOpacity>
    )
  }

  const type = (true) ? 'pass' : 'fail'; // pass, fail, pending

  const data_constants = () => {
    switch (type) {
      case 'pass':
        return {
          "uri": images.complete_exam.pass,
          "title": "Course Complete",
          "description": "Congratulations, well done - you have passed!"
        }

      case 'fail':
        return {
          "uri": images.complete_exam.fail,
          "title": "Failed...",
          "description": "That's a shame! You've tried hard but not managed to answer enough questions to pass the course...."
        }

      default:
        return {
          "uri": images.complete_exam.pending,
          "title": "Result Pending",
          "description": ""
        }
    }
  }

  return (
    <View style={styles.container}>
     
      <ImageBanner src={data_constants().uri} />


      <Text
        style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          margin: 20,
          fontSize: 20
        }}
      >
        {data_constants().title}
      </Text>

      <Text style={{ color: Colors.DarkGray, height: 40 }}>
        {data_constants().description}
      </Text>

      <View style={{ flexDirection: 'row', width: '100%', padding: 10, height: 100, marginVertical: 10 }}>
        {FlexBox('score', '8/19')}
        {FlexBox('percentage', '40%')}
        {FlexBox('pass level', 'Beginner')}
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 10 }}>
          Do you want to see what you {'\n'}got wrong?
        </Text>
        <View style={{ flexDirection: 'column', flexShrink: 1 }}>
          {SelectBox('Yes', 'I want to be a better driver', Colors.resultYesViewBG)}
          {SelectBox('No', 'Not Interested, thanks', Colors.resultNoViewBG)}
        </View>
        <Text style={{ fontSize: 16, paddingVertical: 10 }}>
          Reviewing your incorrect answers can really help you improve your driving skills and make you a better driver.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 10
  },
  box: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});
