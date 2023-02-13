import * as React from 'react';

import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import { Colors, Images } from '../../constants';

export default function Taken() {
  function renderListItem(params: any) {
    const { item } = params;
    return (
      <View style={{ width: Dimensions.get('window').width, borderBottomColor: Colors.bgBlueColor, borderBottomWidth: 2 }}>
        <View style={{ flexDirection: 'row', alignContent: 'space-between', width: Dimensions.get('window').width, padding: 15 }}>
          <Text style={{ textTransform: 'capitalize' }}>{item.title}</Text>
          <Text style={{ alignSelf: 'flex-end', textAlign: 'right', flex: 1 }}>{item.value}%</Text>
        </View>
        <View style={{ width: '95%', backgroundColor: Colors.bgBlueColor, height: 1, alignSelf: 'center' }} />
        <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
          <View style={{ flex: 0.6 }}>
            <Text style={{ fontSize: 10 }}>
              Date Completed
            </Text>
            <Text style={{ fontSize: 10 }}>
              --
            </Text>
          </View>

          <View style={{ flex: 0.25 }}>
            <Text style={{ textAlign: 'center', fontSize: 10  }}>
              Feedback
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 10  }}>
              --
            </Text>
          </View>

          <View style={{ flex: 0.25 }}>
            <Text style={{ textAlign: 'right', fontSize: 10  }}>
              Score
            </Text>
            <Text style={{ textAlign: 'right', fontSize: 10  }}>
              {item.value}
            </Text>
          </View>

        </View>
      </View>
    )

  }

  const renderSeparator = () => <View style={{ width: '100%', backgroundColor: Colors.bgBlueColor, height: 2 }} />


  return (
    <View style={styles.container}>
      <FlatList
        data={
          [
            { title: 'Question Pass Rate', value: 10, total: 100, icon: Images.icons.courseComplete },
            { title: 'Average Time Taken To Complete Course', value: 20, total: 100, icon: Images.icons.courseComplete },
            { title: 'Reviewing Incorrect Answers', value: 50, icon: Images.icons.courseComplete },
            { title: 'Total Number of Questions Answered Correctly', value: 80, icon: Images.icons.courseComplete },
            { title: 'Badges Earned', value: 100, icon: Images.icons.courseComplete },
          ]
        }
        renderItem={renderListItem}
      // ItemSeparatorComponent={renderSeparator}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: Colors.bgBlueColor
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
