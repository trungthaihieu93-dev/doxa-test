import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Thread from '../pages/Thread';

export default function ThreadRoutes() {
  return (
    <Routes>
      <Route path="sub" element={<Thread />} />
    </Routes>
  );
}
