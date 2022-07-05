import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';

import { StyledContainer } from './styled';
import Cover from './components/Cover';
import Tabs from './components/Tabs';
import Filter from './components/Filter';

export default function SubDetail() {
  const navigateTo = useNavigate();
  const params = useParams();

  return (
    <StyledContainer>
      <Helmet>
        <title>Sub {params.id}</title>
      </Helmet>
      <Cover src="" />
      <Tabs />
      <Filter />
    </StyledContainer>
  );
}
