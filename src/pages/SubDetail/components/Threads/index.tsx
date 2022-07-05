import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { Thread } from '../../../../core/types/thread';
import { SUB_ROUTE, THREAD_ROUTE } from '../../../../router/routes';

import {
  StyledContainer,
  StyledGeneralInfoContainer,
  StyledSubtitle,
  StyledThreadContainer,
  StyledTitle,
} from './styled';
import Votes from '../../../../core/components/Votes';
import Interactions from '../../../../core/components/Interactions';

export interface ThreadsProps {
  threads: Thread[];
  sId: string;
  sortType?: string;
}

export default function Threads(props: ThreadsProps) {
  const navigateTo = useNavigate();
  const { threads, sId, sortType } = props;

  return (
    <StyledContainer>
      {threads.length === 0 && 'No thread found'}
      {threads.map((thread) => (
        <StyledThreadContainer
          key={thread.id}
          onClick={() =>
            navigateTo(`${SUB_ROUTE}/${sId}${THREAD_ROUTE}/${thread.id}`)
          }
        >
          <Votes numOfVotes={thread.numOfVotes} />
          <StyledGeneralInfoContainer>
            <StyledTitle>{thread.title}</StyledTitle>
            <StyledSubtitle>
              Posted by <b>{thread.poster}</b> at
              {moment(thread.createdAt).format(' hh:mm MMM, DD, YYYY')}
            </StyledSubtitle>
            <Interactions numOfComments={thread.numOfComments || 0} />
          </StyledGeneralInfoContainer>
        </StyledThreadContainer>
      ))}
    </StyledContainer>
  );
}
