import { get } from '../core/services/API';
import { Sub } from '../core/types/sub';
import { SUB_ENDPOINT } from '../core/services/API/endpoints';

export const getSubById = (id: string) => {
  return get<Sub>(`${SUB_ENDPOINT}/${id}`);
};
