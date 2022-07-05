import { Sub } from '../../core/types/sub';

export interface SubData extends Partial<Sub> {
  id: string;
  title: string;
  subName: string;
}
