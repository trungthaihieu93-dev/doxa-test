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

export const StyledInteractionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const StyledInteractionIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 7px;
`;

export const StyledInteractionText = styled.span`
  font-size: 13px;
  font-weight: bold;
  font-style: normal;
  color: grey;
  margin-left: 7px;
`;

export const StyledVerticalDivider = styled.div`
  width: 1px;
  height: 80%:
  border-right-width: 0.1px;
  border-right-style: solid;
  border-right-color: lightgrey;
  margin-left: 5px;
`;
