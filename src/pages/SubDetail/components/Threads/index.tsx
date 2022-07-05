import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { Thread } from '../../../../core/types/thread';
import { SUB_ROUTE, THREAD_ROUTE } from '../../../../router/routes';

import {
  StyledContainer,
  StyledGeneralInfoContainer,
  StyledInteractionContainer,
  StyledInteractionIcon,
  StyledInteractionText,
  StyledVerticalDivider,
  StyledSubtitle,
  StyledThreadContainer,
  StyledTitle,
} from './styled';
import Votes from '../../../../core/components/Votes';

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
