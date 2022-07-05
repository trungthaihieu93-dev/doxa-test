import React from 'react';
import { Helmet } from 'react-helmet';

import { StyledContainer } from './styled';
import Cover from './components/Cover';

export default function Sub() {
  return (
    <StyledContainer>
      <Helmet>
        <title>Sub</title>
      </Helmet>
      <Cover src="" />
    </StyledContainer>
  );
}
