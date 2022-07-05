import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: #ffffff;
  margin: 20px 20px 20px 20px;
  min-height: 90vh;
  border-width: 1px;
  border-style: solid;
  border-color: lightgrey;
`;

export const StyledThreadContainer = styled.div`
  height: 100px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: lightgrey;
  display: flex;
  flex: 1;
  flex-direction: row;
  cursor: pointer;
  &:hover {
    background-color: #edebe4;
  }
`;

export const StyledGeneralInfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 5px;
`;

export const StyledTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  color: #000000;
`;

export const StyledSubtitle = styled.span`
  font-size: 13px;
  font-weight: 200;
  font-style: normal;
  color: grey;
  margin-top: 5px;
`;
