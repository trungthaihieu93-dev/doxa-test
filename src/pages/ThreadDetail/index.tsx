import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import moment from 'moment';

import Votes from '../../core/components/Votes';
import { initialThread, Thread } from '../../core/types/thread';
import { initialSub, Sub } from '../../core/types/sub';
import { getSubById } from '../../services/sub';
import { getThreadById } from '../../services/thread';

import {
  StyledContainer,
  StyledVoteContainer,
  StyledGeneralInfoContainer,
  StyledPosterInfo,
  StyledSupInfoContainer,
  StyledSubAvatar,
  StyledSubName,
  StyledTitle,
  StyledDescription,
} from './styled';

export default function ThreadDetail() {
  const { sId = '', tId = '' } = useParams();

  const { data: sub, error: subErr } = useQuery<Sub>(
    `sub_${tId}`,
    () => getSubById(sId),
    {
      initialData: initialSub,
    }
  );

  const { data: thread, error: threadErr } = useQuery<Thread>(
    `thread_${tId}`,
    () => getThreadById(tId),
    {
      initialData: initialThread,
    }
  );

  return (
    <StyledContainer>
      <StyledVoteContainer>
        <Votes numOfVotes={thread?.numOfVotes || 0} />
      </StyledVoteContainer>
      <StyledGeneralInfoContainer>
        <StyledSupInfoContainer>
          <StyledSubAvatar
            alt="subAva"
            src={sub?.subAvatar || '/assets/reddit.svg'}
          />
          <StyledSubName>{sub?.subName}</StyledSubName>
          <StyledPosterInfo>
            Posted by <b>{thread?.poster}</b> at
            {moment(thread?.createdAt).format(' hh:mm dd/MM/YYYY')}
          </StyledPosterInfo>
        </StyledSupInfoContainer>
        <StyledTitle>{thread?.title}</StyledTitle>
        <StyledDescription>{thread?.description}</StyledDescription>
      </StyledGeneralInfoContainer>
    </StyledContainer>
  );
}
