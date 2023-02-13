import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Colors, Images } from '../../constants';
import { ImageBanner, Header, Rating } from '../../components';

export default function CourseDetail() {
  console.log('courseDetail', Images.complete_exam.pass)
  return (
    <View style={styles.container}>
      <Header title="Course Detail" />
      <ImageBanner source={Images.complete_exam.pass} />
        <Text style={{padding:10, color: Colors.systemWhite}}>
Fatal Four Driving
        </Text>
      <Rating value={3}/>
      <Text>
        The 'Fatal Four' are the four most common reasons why a death occurs on the road and includes drink and drug driving, speeding, using a mobile phone while driving and not wearing a seat belt. 
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.bgBlueColor
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
