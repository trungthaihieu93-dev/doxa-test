import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="main" element={<Main />} />
    </Routes>
  );
}
