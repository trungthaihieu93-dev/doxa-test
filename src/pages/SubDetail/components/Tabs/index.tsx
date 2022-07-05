import React, { useState } from 'react';

import { StyledContainer, StyledTab, StyledTitle } from './styled';

const mockTabTitles = ['Posts', 'News', 'FAQ', 'Rules'];

export default function Tabs() {
  const [chosenTab, setChosenTab] = useState<string>(mockTabTitles[0]);

  return (
    <StyledContainer>
      {mockTabTitles.map((title) => (
        <StyledTab key={title}>
          <StyledTitle
            style={{ color: title === chosenTab ? '#a19818' : '#704abd' }}
          >
            {title}
          </StyledTitle>
        </StyledTab>
      ))}
    </StyledContainer>
  );
}
