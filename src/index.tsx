import * as React from 'react';

// import 'react-native-get-random-values';
// import { v1 as uuidv1, v4 as uuidv4, v3 as uuidv3, v5 as uuidv5 } from 'uuid';
import { API } from './api';
import { RootSiblingParent } from 'react-native-root-siblings';
import CourseTaken from './screens/courses_taken';
import DVSACourses from './screens/dvsa_courses';
import RoadHowCourses from './screens/roadhow_courses';
import { auth_token } from './api/auth';

export function Authenticate(client_id: string, client_secret: string, user_phone: string) {
  return (
    <RootSiblingParent>
      {Promise.resolve(API.authenticate(client_id, client_secret, user_phone))}
    </RootSiblingParent>
  )
}

export function Course_Taken(props: any) {

  return auth_token ? CourseTaken(props) : null
    // <RootSiblingParent>
    // CourseTaken(props)
    // </RootSiblingParent>
    
  
}

export function DVSA_Courses(props: any) {
  return null;
  // return DVSACourses(props);
  // return auth_token ? CourseTaken() : null;
}

export function RoadHow_Courses(props: any) {
  return null;
  // return RoadHowCourses(props);
  // return auth_token ? CourseTaken() : null;
}
