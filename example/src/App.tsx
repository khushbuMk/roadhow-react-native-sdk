import * as React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, View, Button } from 'react-native';
import { Authenticate, Course_Taken, RoadHow_Courses, DVSA_Courses } from 'roadhow-react-native-sdk';

function Home(params: any) {
  return (
    <View style={styles.container}>

      <Button
        title="Authentication"
        onPress={
          async () => {
            await Authenticate('18', 'o7vg64HwIn9feaT1lE9v3T7PbFlngdjGnrJ5CABs', '7568491235')
          }
        }
      />
      <Button
        title="DVSA Courses"
        onPress={
          () => { params.navigation.navigate('DVSACourses') }
        }
      />
      <Button
        title="RoadHow Courses"
        onPress={
          () => { params.navigation.navigate('RoadHowCourses') }
        }
      />
      <Button
        title="Courses Taken"
        onPress={
          () => { params.navigation.navigate('CourseTaken') }
        }
      />
    </View>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="CourseTaken" component={Course_Taken} />
        <Stack.Screen name="DVSACourses" component={DVSA_Courses} />
        <Stack.Screen name="RoadHowCourses" component={RoadHow_Courses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
