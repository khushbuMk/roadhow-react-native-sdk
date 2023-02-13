import { authenticate } from './auth';
import { summary, summaryData, takenData } from './courseTaken';

export const API = {
    authenticate,
    summary
}

export const Data = {
    courseSummary: summaryData,
    courseTaken: takenData,
}


  