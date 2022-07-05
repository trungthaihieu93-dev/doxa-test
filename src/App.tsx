import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import { BaseContainer } from './core/components/Container';
import AppRoutes from './router';
import { QUERY_CLIENT_CONFIG } from './core/config/query';

import './App.css';

function App() {
  const queryClient = new QueryClient(QUERY_CLIENT_CONFIG);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <BaseContainer>
          <AppRoutes />
        </BaseContainer>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
