import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { Thread } from '../../../../core/types/thread';
import { THREAD_ROUTE } from '../../../../router/routes';

import {
  StyledContainer,
  StyledGeneralInfoContainer,
  StyledInteractionContainer,
  StyledInteractionIcon,
  StyledInteractionText,
  StyledVerticalDivider,
  StyledNumberOfVotes,
  StyledSubtitle,
  StyledThreadContainer,
  StyledTitle,
  StyledVoteContainer,
  StyledVoteIcon,
} from './styled';

export interface ThreadsProps {
  threads: Thread[];
  sortType?: string;
}

export default function Threads(props: ThreadsProps) {
  const navigateTo = useNavigate();
  const { threads, sortType } = props;

  return (
    <StyledContainer>
      {threads.length === 0 && 'No thread found'}
      {threads.map((thread) => (
        <StyledThreadContainer
          key={thread.id}
          onClick={() => navigateTo(THREAD_ROUTE)}
        >
          <StyledVoteContainer>
            <StyledVoteIcon alt="upvote" src="/assets/up_arrow.svg" />
            <StyledNumberOfVotes>{thread.numOfVotes}</StyledNumberOfVotes>
            <StyledVoteIcon alt="downvote" src="/assets/down_arrow.svg" />
          </StyledVoteContainer>
          <StyledGeneralInfoContainer>
            <StyledTitle>{thread.title}</StyledTitle>
            <StyledSubtitle>
              Posted by <b>{thread.poster}</b> at
              {moment(thread.createdAt).format(' hh:mm dd/MM/YYYY')}
            </StyledSubtitle>
            <StyledInteractionContainer>
              <StyledInteractionIcon alt="preview" src="/assets/preview.svg" />
              <StyledVerticalDivider />
              <StyledInteractionIcon alt="comment" src="/assets/comment.svg" />
              <StyledInteractionText>Comment</StyledInteractionText>
              <StyledInteractionIcon alt="share" src="/assets/share.svg" />
              <StyledInteractionText>Share</StyledInteractionText>
              <StyledInteractionIcon alt="save" src="/assets/save.svg" />
              <StyledInteractionText>Save</StyledInteractionText>
              <StyledInteractionIcon alt="hide" src="/assets/hide.svg" />
              <StyledInteractionText>Hide</StyledInteractionText>
              <StyledInteractionIcon alt="report" src="/assets/report.svg" />
              <StyledInteractionText>Report</StyledInteractionText>
            </StyledInteractionContainer>
          </StyledGeneralInfoContainer>
        </StyledThreadContainer>
      ))}
    </StyledContainer>
  );
}
