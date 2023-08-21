import axios from 'axios';
import queryString from 'query-string';
import { MedicalHistoryInterface, MedicalHistoryGetQueryInterface } from 'interfaces/medical-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMedicalHistories = async (
  query?: MedicalHistoryGetQueryInterface,
): Promise<PaginatedInterface<MedicalHistoryInterface>> => {
  const response = await axios.get('/api/medical-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMedicalHistory = async (medicalHistory: MedicalHistoryInterface) => {
  const response = await axios.post('/api/medical-histories', medicalHistory);
  return response.data;
};

export const updateMedicalHistoryById = async (id: string, medicalHistory: MedicalHistoryInterface) => {
  const response = await axios.put(`/api/medical-histories/${id}`, medicalHistory);
  return response.data;
};

export const getMedicalHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/medical-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMedicalHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/medical-histories/${id}`);
  return response.data;
};
