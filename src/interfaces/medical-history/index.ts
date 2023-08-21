import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicalHistoryInterface {
  id?: string;
  patient_id: string;
  doctor_id: string;
  diagnosis?: string;
  treatment?: string;
  notes?: string;
  created_at?: any;
  updated_at?: any;

  user_medical_history_patient_idTouser?: UserInterface;
  user_medical_history_doctor_idTouser?: UserInterface;
  _count?: {};
}

export interface MedicalHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
  diagnosis?: string;
  treatment?: string;
  notes?: string;
}
