import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Search from '../pages/Search';

export default function SearchRoutes() {
  return (
    <Routes>
      <Route path="sub" element={<Search />} />
    </Routes>
  );
}
