
const initialState = {
  avgTimeTakenToCompleteCourseMax: 156,
  avgTimeTakenToCompleteCourseValue: 85,
  completedCourses: 7,
  inprogressCourses: 4,
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
}

export default (state = initialState, action:any) => {
  switch (action.type) {
    case 'ACTION_ADD_COURSE_SUMMARY':
      return {
        ...state,
        ...action.data
      };
    case 'COUNT_DECRESE':
      return {
        ...state,
        count: state
      };
    default:
      return state;
  }
};