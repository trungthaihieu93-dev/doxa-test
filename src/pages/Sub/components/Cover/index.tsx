import React from 'react';

import { StyledImage } from './styled';

export interface CoverProps {
  src: string;
}

export default function Cover(props: CoverProps) {
  const { src } = props;

  return <StyledImage alt="cover" src={src} />;
}
