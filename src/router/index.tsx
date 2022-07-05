import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Search from '../pages/Search';
import SubDetail from '../pages/SubDetail';
import ThreadDetail from '../pages/ThreadDetail';

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="main" element={<Main />} />
      <Route path="sub" element={<Main />} />
      <Route path="sub">
        <Route path=":id" element={<SubDetail />} />
        <Route path=":sId/thread/:tId" element={<ThreadDetail />} />
      </Route>
      <Route path="search" element={<Search />} />
    </Routes>
  );
}

export default MainRouter;
