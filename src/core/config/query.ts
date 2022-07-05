import { QueryClientConfig } from 'react-query';

export const REFETCH_INTERVAL = 3000;

export const QUERY_CLIENT_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchInterval: REFETCH_INTERVAL,
    },
  },
};
