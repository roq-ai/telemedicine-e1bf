import * as yup from 'yup';

export const medicalHistoryValidationSchema = yup.object().shape({
  diagnosis: yup.string().nullable(),
  treatment: yup.string().nullable(),
  notes: yup.string().nullable(),
  patient_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
});
