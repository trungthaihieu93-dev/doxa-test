import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  margin: 20px 20px 20px 20px;
  flex: 1;
  min-height: 90vh;
  border-width: 1px;
  border-style: solid;
  border-color: lightgrey;
`;

export const StyledSubContainer = styled.div`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: lightgrey;
  height: 80px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #edebe4;
  },
`;

export const StyledSubAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;

export const StyledSubName = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
  position: relative;
  bottom: 21%;
  left: 20px;
`;
