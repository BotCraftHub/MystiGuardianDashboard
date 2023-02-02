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

export const TextButton = styled(MainButton)`
  display: flex;
  width: 15.875em;
  height: 3.425em;
  font-size: 1.1em;
  background-color: transparent;
  padding: 0.25em 3.125em;
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
  align-items: center;
  padding: 0.7em 1.25em;
  background-color: #252525;
  border-radius: 0.3125em;
  border: 0.0625em solid rgba(255, 255, 255, 0.07);
  margin: 0.625em 0;

  //add fade effect on hover
  &:hover {
    background-color: #2b2b2b;
    border: 0.0625em solid #2b2b2b;
    box-shadow: 0 0.0625em 0.3125em 0 rgba(77, 73, 73, 0.18);
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 75em;
  margin: 0 auto;

  h1 {
    //center the text
    text-align: center;
    color: #ffffff;
    font-size: 2.5em;
    font-weight: 700;
    margin: 0.625em 0;
  }
`;

export const GuildIcon = styled.img`
  border-radius: 50%;
  width: 3.125em;
  height: 3.125em;
  margin-right: 1.25em;
`;

export const MenuStyle = styled.div`
  padding: 16em 0;
`;

export const AppBarStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5625em 2.1875em;
  box-sizing: border-box;
  border-bottom: 0.0625em solid rgba(255, 255, 255, 0.2);

  h1 {
    font-size: 1.25em;
    font-weight: normal;
  }
`;

export const Title = styled.p`
  font-size: 1.6em;
  font-weight: 700;
  color: #ffffff;
  margin: 0.625em 0;
`;

type FlexProps = Partial<{
    alignItems: string;
    justifyContent: string;
    flexDirection: string;
}>;

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.625em;
  margin: 1.25em 0;
`;