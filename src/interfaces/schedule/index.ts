import { UserInterface } from 'interfaces/user';
import { AppointmentInterface } from 'interfaces/appointment';
import { GetQueryInterface } from 'interfaces';

export interface ScheduleInterface {
  id?: string;
  doctor_id: string;
  start_time: any;
  end_time: any;
  day_of_week: string;
  appointment_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  appointment?: AppointmentInterface;
  _count?: {};
}

export interface ScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
  doctor_id?: string;
  day_of_week?: string;
  appointment_id?: string;
}
