import React from 'react';

import {
  StyledNumberOfVotes,
  StyledVoteContainer,
  StyledVoteIcon,
} from './styled';

export interface VotesProps {
  numOfVotes: number;
}

export default function Votes(props: VotesProps) {
  const { numOfVotes = 0 } = props;

  return (
    <StyledVoteContainer>
      <StyledVoteIcon alt="upvote" src="/assets/up_arrow.svg" />
      <StyledNumberOfVotes>{numOfVotes}</StyledNumberOfVotes>
      <StyledVoteIcon alt="downvote" src="/assets/down_arrow.svg" />
    </StyledVoteContainer>
  );
}
