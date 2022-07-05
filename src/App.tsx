import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { BaseContainer } from './core/components/Container';
import MainRoutes from './router/main';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <BaseContainer>
        <MainRoutes />
      </BaseContainer>
    </BrowserRouter>
  );
}

export default App;
