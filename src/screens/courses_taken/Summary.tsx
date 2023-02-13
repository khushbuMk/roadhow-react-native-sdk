import * as React from 'react';

import { StyleSheet, View, Text, Dimensions, FlatList } from 'react-native';
import { Colors, Images } from '../../constants';
import { ImageBanner, Header, Rating, SummaryCard, ProgressBar } from '../../components';
import { API, Data } from '../../api';
import { useSelector } from 'react-redux';

export default function Summary() {

  const [summary, setSummary] = React.useState({
    avgTimeTakenToCompleteCourseMax: 156,
    avgTimeTakenToCompleteCourseValue: 85,
    completedCourses: 0,
    inprogressCourses: 0,
    questionPassRateMax: 186,
    questionPassRateValue: 63,
    reviewingIncorrectAnswersMax: 111,
    reviewingIncorrectAnswersValue: 0,
    roadKnowledgeMax: 7,
    roadKnowledgeValue: 7,
    roadPerceptionMax: 7,
    roadPerceptionValue: 0,
    totalBadgesEarnedPercentMax: 1800,
    totalBadgesEarnedPercentValue: 6,
    totalCorrectAnsweredMax: 186,
    totalCorrectAnsweredValue: 63,
    totalCourses: 11,
    totalQuestionAnswered: 186,
    totalVideosWatched: 0
  });

  React.useEffect(() => {
    // Data.courseSummary ? null : API.summary().then((res)=>{console.log(res)});
    API.summary().then((res) => {setSummary(res)})

  }, [])

  React.useEffect(() => {
    console.log("Data", Data.courseSummary)
  })

  // const summary = useSelector((store) => store.courseSummary);
  console.log("Summary", summary);

  function renderListItem(params: any) {
    const { item } = params;
    const { value, total, showPercentage, showTime, showOnlyValue } = item;
    const percentage = (value / total) * 100;
    return (
      <View style={{ width: Dimensions.get('window').width, }}>
        <View style={{ flexDirection: 'row', alignContent: 'space-between', width: Dimensions.get('window').width, padding: 15 }}>
          <Text style={{ textTransform: 'capitalize' }}>
            {item.title}
          </Text>
          <Text style={{ alignSelf: 'flex-end', textAlign: 'right', flex: 1 }}>
            {
              showPercentage ?
                percentage.toFixed(2) + '%' :
                showTime ?
                  (value / 60).toFixed(0) + 'm ' + (value % 60) + 's' :
                  showOnlyValue ?
                    value :
                    value + '/' + total
            }
          </Text>
        </View>
        <ProgressBar value={percentage} />
      </View>
    )

  }

  const renderSeparator = () => <View style={{ width: '100%', backgroundColor: 'gray', height: 1 }} />

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: Dimensions.get('screen').width, marginVertical: 10 }}>
        <SummaryCard
          title={'Courses \nCompleted'}
          value={summary.completedCourses }
          icon={Images.icons.courseComplete} />
        <SummaryCard
          title={'Courses \nin progress'}
          value={summary.inprogressCourses}
          icon={Images.icons.courseInProgress} />
      </View>

      <View style={{ backgroundColor: Colors.systemLightGray, width: Dimensions.get('window').width, height: 50, justifyContent: 'center', paddingHorizontal: 20 }}>
        <Text style={{ textAlignVertical: 'center', textTransform: 'uppercase' }}>
          Course Performance
        </Text>
      </View>

      <FlatList
        data={
          [
            {
              title: 'Question Pass Rate',
              value: summary?.questionPassRateValue,
              total: summary?.questionPassRateMax,
              showPercentage: true
            },
            {
              title: 'Average Time Taken To Complete Course',
              value: summary?.avgTimeTakenToCompleteCourseValue,
              total: summary?.avgTimeTakenToCompleteCourseMax,
              showTime: true
            },
            {
              title: 'Reviewing Incorrect Answers',
              value: summary?.reviewingIncorrectAnswersValue,
              total: summary?.reviewingIncorrectAnswersMax,
              showPercentage: true
            },
            {
              title: 'Total Number of Questions Answered Correctly',
              value: summary?.totalCorrectAnsweredValue,
              total: summary?.totalCorrectAnsweredMax
            },
            {
              title: 'Badges Earned',
              value: summary?.totalBadgesEarnedPercentValue,
              total: summary?.totalBadgesEarnedPercentMax,
              showOnlyValue: true
            },
          ]
        }
        renderItem={renderListItem}
        ItemSeparatorComponent={renderSeparator}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.systemWhite,

  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
