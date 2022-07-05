import React, { useState } from 'react';

import { StyledContainer, StyledTitle, StyledSelection } from './styled';

const filterTypes = ['Hot', 'New', 'Top'];

export default function Filter() {
  const [filterType, setFilterType] = useState<string>(filterTypes[0]);

  return (
    <StyledContainer>
      <StyledTitle>SORT</StyledTitle>
      <StyledSelection
        value={filterType}
        onChange={(evt) => setFilterType(evt.target.value)}
      >
        {filterTypes.map((type) => (
          <option key={type} value={type} selected={type === filterType}>
            {type}
          </option>
        ))}
      </StyledSelection>
    </StyledContainer>
  );
}
