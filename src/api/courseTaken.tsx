import axios from 'axios';
import { generateAPIUrl } from './apiManager';
import { auth_token } from './auth';

export var summaryData = {
    avgTimeTakenToCompleteCourseMax: 0,
    avgTimeTakenToCompleteCourseValue: 0,
    completedCourses: 0,
    inprogressCourses: 0,
    questionPassRateMax: 0,
    questionPassRateValue: 0,
    reviewingIncorrectAnswersMax: 0,
    reviewingIncorrectAnswersValue: 0,
    roadKnowledgeMax: 0,
    roadKnowledgeValue: 0,
    roadPerceptionMax: 0,
    roadPerceptionValue: 0,
    totalBadgesEarnedPercentMax: 0,
    totalBadgesEarnedPercentValue: 0,
    totalCorrectAnsweredMax: 0,
    totalCorrectAnsweredValue: 0,
    totalCourses: 0,
    totalQuestionAnswered: 0,
    totalVideosWatched: 0
};
export var takenData = {};

export function summary() {
    console.log('Summary API is called');

    const url = generateAPIUrl('client/course-summary')

    // if (!auth_token.length) {
    return axios.post(
        `${url}`,
        {
            'course_exam_type': 14
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth_token}`
            }
        })
        .then((res) => {
            const response = res;
            summaryData = response.data.data;
            console.log(summaryData);
            return summaryData;
        })
        .catch((error) => {
            console.log('auth error', error)
            return summaryData;
        })
}