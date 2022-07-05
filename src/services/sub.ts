import { get } from '../core/services/API';
import { Sub } from '../core/types/sub';
import { SUB_ENDPOINT } from '../core/services/API/endpoints';

export const getSubs = async () => (await get<Sub[]>(SUB_ENDPOINT)).data;

export const getSubById = async (id: string) =>
  (await get<Sub>(`${SUB_ENDPOINT}/${id}`)).data;
