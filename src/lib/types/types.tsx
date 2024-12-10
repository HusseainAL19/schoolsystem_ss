import { FC } from 'react';

export interface overDataAlltypes {}

export interface routesTypes {
  id: number;
  routeName: string;
  routePath: string;
  routeComp: FC;
  routeCompActiveIcon: any;
  routeCompUnActiveIcon: any;
  sideNav: boolean
}

export interface schoolProfileType {
  dis_id: number;
  school_active: boolean;
  school_id: number;
  school_key: string;
  school_location: string;
  school_manager_birth_date: string;
  school_manager_current_location: string;
  school_manager_id: string;
  school_manager_location: string;
  school_manager_name: string;
  school_name: string;
  school_owner_birth_date: string;
  school_owner_id: number;
  school_owner_name: string;
  school_store_active: boolean;
  school_total_acc: number;
  school_total_bus: number;
  school_total_student: number;
  school_total_teachers: number;
  manager_id: number;
}

export interface teacherProfileType {
  teacher_id: number;
  teacher_name: string;
  teacher_birth_day: string;
  teacher_location: string;
  teacher_device_location: string;
  teacher_total_student: number;
  teacher_total_score: number;
  teacher_present: number;
  teacher_image_path: string;
  teacher_id_xnumber: string;
  teacher_id_image_path_front: string;
  teacher_id_imgae_path_back: string;
  teacher_degree: string;
  teacher_major: string;
  teacher_key: string;
  teacher_total_groups: number;
  school_id: number;
  owner_id: number;
  teacher_active: boolean;
}

export interface studentProfileType {
  student_id: number;
  student_full_name: string;
  student_birth_date: string;
  student_parent_full_name: string;
  student_phone_number: string;
  student_parent_phone_number: string;
  student_location: string;
  student_current_location: string;
  student_class: string;
  student_study_group_id: number;
  student_id_back: string;
  student_id_front: string;
  student_device_type: string;
  student_device_osnum: string;
  student_actve: boolean;
  student_key: string;
  student_overall_num: number;
  school_id: number;
  dis_id: number;
  manager_id: number;
  bus_id: number;
}

export interface studentPaymentProfileType {
  student_payments_id: number;
  student_payments_register_person: string;
  student_payments_title: string;
  student_payments_desc: string;
  student_payments_register_date: string;
  student_payments_current_date: string;
  student_payments_total_ammount: number;
  student_payments_discount: number;
  school_id: number;
  student_id: number;
}

export interface SOInfotype {
  SchoolOwnerProfiles: {
    dis_id: number;
    manager_id: number;
    school_owner_active: number;
    school_owner_birth_date: string;
    school_owner_id: number;
    school_owner_key: string;
    school_owner_location: string;
    school_owner_name: string;
    school_owner_personal_id: string;
    school_owner_phone_number: string;
    school_owner_register_date: string;
    school_owner_total_schools: number;
  };
  SchoolProfiles: schoolProfileType[];
  StudentProfiles: studentProfileType[];
  TeacherProfiles: teacherProfileType[];
  StudentPayments: studentPaymentProfileType[];
}
