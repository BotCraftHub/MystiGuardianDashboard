import styled from 'styled-components';

export const MainButton = styled.div`
  gap: 0.625em;
  display: flex;
  width: 46.875em;
  background-color: #313030;
  padding: 0.25em 3.125em;
  box-sizing: border-box;
  //add gap between the two divs
  border-Radius: 0.3125em;
  border: 0.0625em solid #313030;
  //center the text and icon and remove excess padding
  justify-Content: center;
  align-Items: center;
  box-Shadow: 0 0.0625em 0.3125em 0 rgba(77, 73, 73, 0.18);
  margin: 0.625em 0;
  //add fade effect on hover
  &:hover {
    background-color: #2b2b2b;
    border: 0.0625em solid #2b2b2b;
    box-Shadow: 0 0.0625em 0.3125em 0 rgba(77, 73, 73, 0.18);
    cursor: pointer;
  }
`;

export const HomeStyle = styled.div`
  height: 100%;
  padding: 3.125em 0;
  box-Sizing: border-box;
  display: flex;
  flex-Direction: column;
  justify-Content: space-between;
  align-Items: center;
`;

export const MainFooter = styled.div`
  display: flex;
  width: 46.875em;
  justify-Content: space-between;
  align-Items: center;

  span {
    color: #b9b9b9;

    &:hover {
      cursor: pointer;
      color: #ffffff;
    }
  }
`;

export const GuildMenuStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5em;
  background-color: #252525;
  border-radius: 0.3125em;
  border: 0.0625em solid rgba(255, 255, 255, 0.8);
`;