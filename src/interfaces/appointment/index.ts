import { ScheduleInterface } from 'interfaces/schedule';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  time: any;
  doctor_id: string;
  patient_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  schedule?: ScheduleInterface[];
  user_appointment_doctor_idTouser?: UserInterface;
  user_appointment_patient_idTouser?: UserInterface;
  _count?: {
    schedule?: number;
  };
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  doctor_id?: string;
  patient_id?: string;
  status?: string;
}
