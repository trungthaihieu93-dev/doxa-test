import React from 'react';

import {
  StyledInteractionContainer,
  StyledInteractionIcon,
  StyledInteractionText,
  StyledVerticalDivider,
} from './styled';

export interface InteractionsProps {
  numOfComments: number;
}

export default function Interactions(props: InteractionsProps) {
  const { numOfComments } = props;

  return (
    <StyledInteractionContainer>
      <StyledInteractionIcon alt="preview" src="/assets/preview.svg" />
      <StyledVerticalDivider />
      <StyledInteractionIcon alt="comment" src="/assets/comment.svg" />
      <StyledInteractionText>{numOfComments} Comments</StyledInteractionText>
      <StyledInteractionIcon alt="share" src="/assets/share.svg" />
      <StyledInteractionText>Share</StyledInteractionText>
      <StyledInteractionIcon alt="save" src="/assets/save.svg" />
      <StyledInteractionText>Save</StyledInteractionText>
      <StyledInteractionIcon alt="hide" src="/assets/hide.svg" />
      <StyledInteractionText>Hide</StyledInteractionText>
      <StyledInteractionIcon alt="report" src="/assets/report.svg" />
      <StyledInteractionText>Report</StyledInteractionText>
    </StyledInteractionContainer>
  );
}
