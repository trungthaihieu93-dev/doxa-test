import React from 'react';

import {
  StyledImage,
  StyledContainer,
  StyledSubInfoContainer,
  StyedSubName,
  StyledSubAvatar,
} from './styled';

export interface CoverProps {
  cover: string;
  subName: string;
  subAvatar: string;
}

export default function Cover(props: CoverProps) {
  const { cover, subAvatar, subName } = props;

  return (
    <StyledContainer>
      <StyledImage alt="cover" src={cover || '/assets/default_cover.jpg'} />;
      <div>
        <StyledSubInfoContainer>
          <StyledSubAvatar
            alt="subAvatar"
            src={subAvatar || '/assets/reddit.svg'}
          />
          <StyedSubName>{subName}</StyedSubName>
        </StyledSubInfoContainer>
      </div>
    </StyledContainer>
  );
}
