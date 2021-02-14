import styled, { css, keyframes } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

// Extra_Colors
const primaryColor = "#000000";
const hoverColor = "#2B3D66";
const activeColor = "#FF0000";
const textOnPrimary = "#FFFFFF";
const textOnPrimaryInverted = "#ffffff";
const disabled = "#B1B1B1";
const disabledText = "#3E3D3D";

// Button_Modifiers
const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 0.8rem;
    padding: 8px;
  `,
  large: () => `
    font-size: 1.5rem;
    padding: 16px 25px;
  `,
  warning: () => `
    background-color: #F2DC12;
    color: black;

    &:hover, &:focus, &:active {
        background-color: #F2DC12;
        color: black;
        outline: none;
    }
  `
};

const ButtonStyled = styled.button`
  // CSS / SCSS goes in here
  width: 10%;
  margin: 2rem;
  background-color: ${primaryColor};
  border: none;
  border-radius: 5px;
  color: white;
  display: inline;
  /* text-transform: uppercase; */
  padding: 12px 24px;
  font-size: 1rem;

  /* nested pseudo-classes */
  &:hover {
    background-color: ${hoverColor};
    color: ${textOnPrimaryInverted};
    cursor: pointer;
  }

  &:focus {
    background-color: ${activeColor};
    color: ${textOnPrimaryInverted};
    outline: 2px solid ${activeColor};
    outline-offset: 1px;
  }

  &:active {
    background-color: ${activeColor};
    color: ${textOnPrimaryInverted};
  }

  &:disabled {
    background-color: ${disabled};
    color: ${disabledText};
    cursor: not-allowed;
  }
  /* last line of code applies Modifiers */
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default ButtonStyled;
