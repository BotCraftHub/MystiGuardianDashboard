// buttonStyled.ts

import styled, {css} from 'styled-components';

export const MainButton = styled.button`
    padding: 1.5em 0.75em; /* Adjust padding to make button taller and less wide */
    border-radius: 0.5em;
    outline: none;
    border: none;
    font-size: 1.3em; /* Increase font size for better visibility */
    color: #fff;
    cursor: pointer;
    background-color: #3d3d3d;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; /* Center the button */
    max-width: 15em; /* Adjusted maximum width for a more controlled width */
    width: 100%; /* Make the button fill its container's width */
    transition: transform 0.3s ease; /* Add transition effect */

    &:hover {
        background-color: #2b2b2b;
    }

    &:active {
        transform: scale(0.95); /* Add "jump" effect when clicked */
    }
`;

export const toastStyles = css`
  background-color: #3d3d3d !important;
  color: #fff !important;
  width: 200px !important;
  padding: 10px !important;
  box-sizing: border-box !important;
  border-radius: 4px !important;
`;
