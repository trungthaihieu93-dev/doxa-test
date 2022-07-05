import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SUB_ROUTE } from '../../router/routes';

import {
  StyledContainer,
  StyledSubAvatar,
  StyledSubContainer,
  StyledSubName,
} from './styled';

export default function Main() {
  const navigateTo = useNavigate();

  return (
    <StyledContainer>
      {['Sub1', 'Sub2'].map((sub) => (
        <StyledSubContainer key={sub} onClick={() => navigateTo(`${SUB_ROUTE}/${1}`)}>
          <StyledSubAvatar alt="subAvatar" src="/assets/reddit.svg" />
          <StyledSubName>{sub}</StyledSubName>
        </StyledSubContainer>
      ))}
    </StyledContainer>
  );
}
