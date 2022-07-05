import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sub from '../pages/Sub';

export default function SubRoutes() {
  return (
    <Routes>
      <Route path="sub" element={<Sub />} />
    </Routes>
  );
}
