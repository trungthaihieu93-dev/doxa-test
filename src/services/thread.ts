import { get } from '../core/services/API';
import { Thread } from '../core/types/thread';
import { THREAD_ENDPOINT } from '../core/services/API/endpoints';

export const getThreadsBySub = async (subId: string) =>
  (
    await get<Thread[]>(
      `${THREAD_ENDPOINT}?${new URLSearchParams({ sub: subId }).toString()}`
    )
  ).data;

export const getThreadById = async (threadId: string) =>
  (await get<Thread>(`${THREAD_ENDPOINT}/${threadId}`)).data;
