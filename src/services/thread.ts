import { get } from '../core/services/API';
import { Thread } from '../core/types/thread';
import { THREAD_ENDPOINT } from '../core/services/API/endpoints';

export const getThreadsBySub = (subId: string) => {
  return get<Thread>(
    `${THREAD_ENDPOINT}?${new URLSearchParams({ sub: subId }).toString()}`
  );
};
