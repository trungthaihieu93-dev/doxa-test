import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

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
      {['test1', 'test2'].map((thread) => (
        <StyledThreadContainer
          key={thread}
          onClick={() => navigateTo(THREAD_ROUTE)}
        >
          <StyledVoteContainer>
            <StyledVoteIcon alt="upvote" src="/assets/up_arrow.svg" />
            <StyledNumberOfVotes>123</StyledNumberOfVotes>
            <StyledVoteIcon alt="downvote" src="/assets/down_arrow.svg" />
          </StyledVoteContainer>
          <StyledGeneralInfoContainer>
            <StyledTitle>Title</StyledTitle>
            <StyledSubtitle>Subtitle</StyledSubtitle>
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
