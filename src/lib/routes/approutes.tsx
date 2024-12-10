import { routesTypes } from '../types/types';
import {
  MdOutlineDashboard,
  MdDashboard,
  MdOutlineGroups2,
  MdGroups2,
  MdCastForEducation,
  MdOutlineCastForEducation,
  MdOutlineSupervisedUserCircle,
  MdSupervisedUserCircle
} from 'react-icons/md';
import { PiStudentLight, PiStudentFill } from 'react-icons/pi';



import Setter from '@/pages/setter/Setter';
import HomePage from '@/pages/home/HomePage';
import StudentPage from '@/pages/student/StudentPage';
import TeacherPage from '@/pages/teachers/Teachers';
import StudentGroups from '@/pages/studentGroups/StudentGroups';
import TeacherGroups from '@/pages/teachersGroups/TeacherGroups';
import Eduction from '@/pages/onlineEduction/Eduction';
import UserPage from '@/pages/users/User';
import OnBoarding from '@/pages/onboarding/OnBoarding';
import singleTeacher from '@/pages/singleTeacher/singleTeacher';
import singleStudent from '@/pages/singleStudent/singleStudent';


export const iconSize: number = 30;
export const iconColor: string = '#111111';

export const routes: routesTypes[] = [
  {
    id: 1,
    routeName: 'setter',
    routePath: '/',
    routeComp: Setter,
    routeCompActiveIcon: MdDashboard,
    routeCompUnActiveIcon: MdOutlineDashboard,
    sideNav: true
  },
  {
    id: 2,
    routeName: 'home',
    routePath: '/home',
    routeComp: HomePage,
    routeCompActiveIcon: MdDashboard,
    routeCompUnActiveIcon: MdOutlineDashboard,
    sideNav: true
  },
  {
    id: 3,
    routeName: 'students',
    routePath: '/students',
    routeComp: StudentPage,
    routeCompActiveIcon: PiStudentFill,
    routeCompUnActiveIcon: PiStudentLight,
    sideNav: true
  },
  {
    id: 4,
    routeName: 'teachers',
    routePath: '/teachers',
    routeComp: TeacherPage,
    routeCompActiveIcon: PiStudentFill,
    routeCompUnActiveIcon: PiStudentLight,
    sideNav: true
  },
  {
    id: 5,
    routeName: 'studentGroups',
    routePath: '/stgroups',
    routeComp: StudentGroups,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
  {
    id: 6,
    routeName: 'teacherGroups',
    routePath: '/tsgroups',
    routeComp: TeacherGroups,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
  {
    id: 7,
    routeName: 'eduction',
    routePath: '/eduction',
    routeComp: Eduction,
    routeCompActiveIcon: MdCastForEducation,
    routeCompUnActiveIcon: MdOutlineCastForEducation,
    sideNav: true
  },
  {
    id: 8,
    routeName: 'user',
    routePath: '/user',
    routeComp: UserPage,
    routeCompActiveIcon: MdSupervisedUserCircle,
    routeCompUnActiveIcon: MdOutlineSupervisedUserCircle,
    sideNav: true
  },
  {
    id: 9,
    routeName: 'onboarding',
    routePath: '/onboarding',
    routeComp: OnBoarding,
    routeCompActiveIcon: MdSupervisedUserCircle,
    routeCompUnActiveIcon: MdOutlineSupervisedUserCircle,
    sideNav: false
  },
  {
    id: 10,
    routeName: 'singleTeacher',
    routePath: '/steacher',
    routeComp: singleTeacher,
    routeCompActiveIcon: MdSupervisedUserCircle,
    routeCompUnActiveIcon: MdOutlineSupervisedUserCircle,
    sideNav: false
  },
  {
    id: 11,
    routeName: '/singleStudent',
    routePath: '/sstudent',
    routeComp: singleStudent,
    routeCompActiveIcon: MdSupervisedUserCircle,
    routeCompUnActiveIcon: MdOutlineSupervisedUserCircle,
    sideNav: false
  }
];
