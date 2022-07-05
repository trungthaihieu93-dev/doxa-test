import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Search from '../pages/Search';
import SubDetail from '../pages/SubDetail';
import Sub from '../pages/Sub';
import Thread from '../pages/Thread';

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="main" element={<Main />} />
      <Route path="sub" element={<Sub />} />
      <Route path="sub">
        <Route path=":id" element={<SubDetail />} />
      </Route>
      <Route path="search" element={<Search />} />
      <Route path="thread" element={<Thread />} />
    </Routes>
  );
}

export default MainRouter;
