import styled from 'styled-components';

export const MainButton = styled.div`
  //TODO: At the end convert px to em
  //gap between FaDiscord and p
  gap: 10px;
  display: flex;
  width: 750px;
  background-color: #313030;
  padding: 0.7em 0.1em;
  box-sizing: border-box;
  //add gap between the two divs
  margin-Bottom: 0.625em;
  border-Radius: 3em;
  border: 1px solid #313030;
  //center the text and icon and remove excess padding
  justify-Content: center;
  align-Items: center;
  box-Shadow: 0 0 0 0.5px #00000040;
`;

export const HomeStyle = styled.div`
 height: 100%;
        padding: 50px 0;
        box-Sizing: border-box;
        display: flex;
        flex-Direction: column;
        justify-Content: space-between;
        align-Items: center;
`;
