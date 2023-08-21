import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  bio: yup.string().nullable(),
  specialty: yup.string().nullable(),
  education: yup.string().nullable(),
  experience: yup.string().nullable(),
  location: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
