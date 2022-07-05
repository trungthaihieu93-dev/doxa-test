import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { SUB_ROUTE } from '../../router/routes';
import { Sub } from '../../core/types/sub';
import { getSubs } from '../../services/sub';

import {
  StyledContainer,
  StyledSubAvatar,
  StyledSubContainer,
  StyledSubName,
} from './styled';

export default function Main() {
  const navigateTo = useNavigate();
  const { data: subs, error: subsError } = useQuery<Sub[]>('subs', getSubs, {
    initialData: [],
  });

  return (
    <StyledContainer>
      {subs?.map((sub) => (
        <StyledSubContainer
          key={sub.id}
          onClick={() => navigateTo(`${SUB_ROUTE}/${sub.id}`)}
        >
          <StyledSubAvatar
            alt="subAvatar"
            src={sub.subAvatar || '/assets/reddit.svg'}
          />
          <StyledSubName>{sub.subName}</StyledSubName>
        </StyledSubContainer>
      ))}
    </StyledContainer>
  );
}
