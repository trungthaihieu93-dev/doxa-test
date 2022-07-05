import React from 'react';
import { Routes } from 'react-router-dom';

import MainRoutes from './main';
import SubRoutes from './sub';
import SearchRoutes from './search';
import ThreadRoutes from './thread';

function MainRouter() {
  return (
    <>
      <MainRoutes />
      <SubRoutes />
      <SearchRoutes />
      <ThreadRoutes />
    </>
  );
}

export default MainRouter;
